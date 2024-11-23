const express = require("express");
const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connection.connect();

app.get("/users", (req, res) => {
  connection.query("SELECT * FROM users", (err, rows, fields) => {
    if (err) throw err;
    console.log(req);

    console.log("The solution is: ", rows);
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connection.end();
