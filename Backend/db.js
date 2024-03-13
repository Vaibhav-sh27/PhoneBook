const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2310',
    database: 'phonebook'
});
 
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});

// CREATE TABLE `phonebook`.`data` (
//     `first_name` VARCHAR(20) NOT NULL,
//     `middle_name` VARCHAR(20) NULL,
//     `last_name` VARCHAR(20) NOT NULL,
//     `email` VARCHAR(50) NOT NULL,
//     `ph_no1` INT NOT NULL,
//     `ph_no2` INT NULL,
//     `address` VARCHAR(50) NOT NULL);

module.exports= connection;  