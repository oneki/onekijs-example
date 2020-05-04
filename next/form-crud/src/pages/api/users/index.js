
import {create, list} from './db';


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
  const users = list();
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(users));
}

const handlePOST = (req, res) => {
  const user = create(req.body);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(user));

}