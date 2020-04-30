
import users, {nextId} from './db';


export default (req, res) => {
  if (req.method === 'GET') {
    handleGET( res);
  } else if (req.method === 'POST') {
    handlePOST(req, res);
  } else {
    res.statusCode = 405;
    res.end();
  }
}

const handleGET = (res) => {
  const data = Object.values(users);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data));
}

const handlePOST = (req, res) => {
  const id = nextId();
  const user = req.body;
  user.id = id;
  users[id] = user;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(user));

}