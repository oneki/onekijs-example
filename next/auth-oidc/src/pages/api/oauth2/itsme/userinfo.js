import { decrypt, verify } from './jwt';

export default async (req, res) => {

  if (!req.cookies.access_token || !req.cookies.userinfo) {
    // User not yet authenticated
    res.statusCode = 401
    res.end();
  } else {
    try {
      //id_token in the cookie is encrypted with our public key and signed with Itsme private key
      const encryptedUserinfo = req.cookies.userinfo;
      const decryptedUserinfo = decrypt(encryptedUserinfo);
      const userinfo = verify(decryptedUserinfo);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(userinfo));
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end(JSON.stringify(error));
    }
  } 
}