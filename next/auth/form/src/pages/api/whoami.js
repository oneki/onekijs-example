export default async (req, res) => {

  if (!req.cookies.access_token || req.cookies.access_token !== 'TOKEN_ADMIN') {
    // User not yet authenticated
    res.statusCode = 401
    res.end();
  } else {
    try {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        "sub": "admin",
        "email": "admin@oneki.net"
      }));
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end(JSON.stringify(error));
    }
  } 
}