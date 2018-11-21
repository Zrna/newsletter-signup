var faker = require('faker');
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
    })
}