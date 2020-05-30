export default async (req, res) => {
  try {
    if (req.body.username === 'admin' && req.body.password === 'admin') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Set-Cookie', [
        `access_token=TOKEN_ADMIN; path=/; HttpOnly; SameSite=Stric`
      ]);      
      res.end();
    } else {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        "message": "Username or password incorrect"
      }));
    }
  } catch (error) {
    console.log("error", error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        "message": "Unexpected error"
      }));
  }
}