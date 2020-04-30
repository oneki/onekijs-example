import users from './db';

export default (req, res) => {
  const {
    query: { id },
  } = req;
  
  if (req.method === 'GET') {
    handleGET(id, res);
  } else if (req.method === 'PUT') {
    handlePUT(id, req, res);
  } else if (req.method === 'DELETE') {
    handleDELETE(id, res);
  } else {
    res.statusCode = 405;
    res.end();
  }
}

const handleGET = (id, res) => {
  const user = users[parseInt(id)];
  if (user) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.end();
  }
}

const handlePUT = (id, req, res) => {
  const user = users[parseInt(id)];
  if (user) {
    users[parseInt(id)] = req.body;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(users[parseInt(id)]));
  } else {
    res.statusCode = 404;
    res.end();
  }  
}

const handleDELETE = (id, res) => {
  const user = users[parseInt(id)];
  if (user) {
    delete users[parseInt(id)];
  } 
  res.statusCode = 200;
  res.end();
}