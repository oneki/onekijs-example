const axios = require('axios');
const qs = require('query-string');

export default async (req, res) => {
  if (!req.cookies.access_token) {
    res.statusCode = 401
    res.end();
  } else {
    try {
      const response = await axios({
        method: 'get',
        url: 'PUT_IDP_USERINFO_URL_HERE', //example: https://auth.oneki.net/oauth2/userInfo
        headers: {
          'Authorization': `Bearer ${req.cookies.access_token}`
        }
      });
      res.statusCode = response.status;
      res.setHeader('Content-Type', response.headers['content-type']);
      res.end(JSON.stringify(response.data))
    } catch (error) {
      // console.error(error);
      throw error;
    }
  }
  
}