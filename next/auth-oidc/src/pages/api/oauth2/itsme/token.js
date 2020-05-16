import axios from 'axios';
import qs from 'query-string';
import jwt from './jwt';


export default async (req, res) => {
  const assertion = {
    "iss": process.env.NEXT_ITSME_CLIENT_ID,
    "sub": process.env.NEXT_ITSME_CLIENT_ID,
    "aud": process.env.NEXT_BACKEND_ITSME_TOKEN_ENDPOINT,
    "jti": 'ethias-'+jwt.jti(),
    "exp": jwt.exp(3600)
  }

  const signedAssertion = jwt.sign(assertion);
  const signedAndEncryptedAssertion = jwt.encrypt(signedAssertion);
  const data = qs.stringify({
    grant_type: req.body.grant_type,
    code: req.body.code,
    redirect_uri: req.body.redirect_uri,
    client_assertion: signedAndEncryptedAssertion,
    client_assertion_type: 'urn:ietf:params:oauth:client-assertion-type:jwt-bearer'
  });
  try {
    const response = await axios({
      method: 'post',
      url: process.env.NEXT_BACKEND_ITSME_TOKEN_ENDPOINT,
      data,
      headers: {
        'content-type': 'application/x-www-form-urlencoded'
      }
    });

    const responseUserInfo =  await axios({
      method: 'get',
      url: process.env.NEXT_BACKEND_ITSME_USERINFO_ENDPOINT, //example: https://auth.oneki.net/oauth2/userInfo
      headers: {
        'Authorization': `Bearer ${response.data.access_token}`
      }
    });

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Set-Cookie', [
      `access_token=${response.data.access_token}; path=/; HttpOnly; SameSite=Stric; Secure`,
      `userinfo=${responseUserInfo.data}; path=/; HttpOnly; SameSite=Stric; Secure` // userinfo is encrypted and signed
    ]);

    // TODO verify id_token
    res.end()
  } catch (error) {
    console.error(error.response.data.error, error.response.data.detail);
    res.statusCode = error.response.status;
    res.end(JSON.stringify(error.response ? error.response.data : { error: 'Unexpected error'}));
  } 
}