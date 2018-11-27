var config = require('../config/config.js');
var mysql = require('mysql');
var connection = mysql.createPool(config.databaseOptions);

var faker = require('faker');
var migration = require('mysql-migrations');

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

// inserting fake users data using faker
var data = [];
for (var i = 0; i < 10; i++) {
    data.push([
        faker.internet.email(),
        faker.date.past()
    ]);
};

var insertUserData = 'INSERT INTO users (email, created_at) VALUES ?';

module.exports = {
    "up": connection.query(insertUserData, [data], function (error, results) {
        if (error) throw error;
        console.log(results);
        console.log('Inserting fake emails completed.')
    })
}