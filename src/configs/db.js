const mysql = require("mysql");
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'db_vegetabeli'
});

db.connect(err => {
  if (err) throw err;
});

module.exports = db;
