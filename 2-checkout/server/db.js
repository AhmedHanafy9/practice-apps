const mysql = require("mysql2");
const Promise = require("bluebird");

// Configure process.env variables in ../.env
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

const db = Promise.promisifyAll(connection, { multiArgs: false });

db.connectAsync()
  .then(() => console.log(`Connected to MySQL as id: ${db.threadId}`))
  .then(() =>
    // Expand this table definition as needed:
    db.queryAsync(
      `CREATE TABLE IF NOT EXISTS responses
      (id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      address_line1 VARCHAR(255) NOT NULL,
      address_line2 VARCHAR(255),
      city VARCHAR(255) NOT NULL,
      state VARCHAR(255) NOT NULL,
      zip_code INT(11) NOT NULL,
      credit_card VARCHAR(255) NOT NULL,
      expiry_date VARCHAR(255) NOT NULL,
      cvv INT(11) NOT NULL,
      billing_zip_code INT (11) NOT NULL,
      cookie_id VARCHAR(255) UNIQUE)`
    )
  )
  .catch((err) => console.log(err));

module.exports = db;
