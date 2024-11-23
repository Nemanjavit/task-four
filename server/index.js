const express = require("express");
const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get("/", (req, res) => {
  res.send("Hello! I am in vercel.com");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connection.connect();

connection.query("SELECT * FROM users", (err, rows, fields) => {
  if (err) throw err;

  console.log("The solution is: ", rows);
});

connection.end();
