var mysql = require('mysql');
var migration = require('mysql-migrations');

var connection = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'join_us',
    timezone: 'UTC+1'
});

migration.init(connection, __dirname + '/migrations');

// creating 'users' table
let createUsersTable = `CREATE TABLE if not exists users (
                        id INT AUTO_INCREMENT PRIMARY KEY,
                        email VARCHAR(255) NOT NULL,
                        created_at TIMESTAMP DEFAULT NOW(),
                        terms_accepted INT(1) NOT NULL DEFAULT '0'
                    )`;

module.exports = {
    "up": connection.query(createUsersTable, function (error, results) {
        if (error) throw error;
        console.log(results);
    }),
    "down": ""
}

// inserting fake users data
var insertUserData = `INSERT INTO users (email)
            VALUES ('Esteban.Barrows10@yahoo.com'),
            ('Jodie.Sauer55@gmail.com'),
            ('Skylar90@hotmail.com'),
            ('Samara.Hartmann42@gmail.com'),
            ('Trinity_Terry20@gmail.com'),
            ('Donnell.Wisoky96@yahoo.com'),
            ('Ezra_Rutherford@gmail.com'),
            ('Demetrius.Hoppe94@hotmail.com'),
            ('Zelda.Pfannerstill@gmail.com'),
            ('Marcia.Cormier@yahoo.com')`;

module.exports = {
    "up": connection.query(insertUserData, function (error, results) {
        if (error) throw error;
        console.log(results);
    })
}