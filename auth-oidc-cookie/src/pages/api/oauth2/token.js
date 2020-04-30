
const axios = require('axios');
const qs = require('query-string');

export default async (req, res) => {
  try {
    const response = await axios({
      method: 'post',
      url: 'PUT_IDP_TOKEN_URL_HERE', //https://auth.oneki.net/oauth2/token
      data: qs.stringify({
        grant_type: req.body.grant_type,
        code: req.body.code,
        redirect_uri: 'https://localhost:3000/login/callback',
        code_verifier: req.body.code_verifier
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      auth: {
        username: 'PUT_CLIENT_ID_HERE', //example: 1eb5cq6p7d8dm8g4q9jk6qdvd8
        password: 'PUT_CLIENT_SECRET_HERE' //example: my_super_secret
      }
    });
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Set-Cookie', [
      `access_token=${response.data.access_token}; path=/; HttpOnly; SameSite=Stric; Secure`,
      `refresh_token=${response.data.refresh_token}; path=/; HttpOnly; SameSite=Stric; Secure`
    ]);
    res.end(JSON.stringify(response.data))
  } catch (error) {
    console.error(error);
    throw error;
  }
  
  
}