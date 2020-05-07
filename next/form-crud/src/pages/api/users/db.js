const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

db.defaults({ users: [] }).write();

export function create(user) {
  user.id = "" + process.hrtime();
  db.get("users").push(user).write();
  return user;
}

export function update(user) {
  db.get("users").find({ id: user.id }).assign(user).write();
  return user;
}

export function findById(id) {
  const result = db.get("users").filter({ id }).value();
  if (result && result.length === 1) {
    return result[0];
  }
  return null;
}

export function list() {
  return db.get("users").value();
}

export function remove(id) {
  db.get("users").remove({ id }).write();
}
