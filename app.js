var faker = require('faker');
var express = require("express");
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));

var connection = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '',
    database: 'join_us',
    timezone: 'UTC+1'
});

// Creating user table
connection.connect(function (err) {
    if (err) {
        return console.error('error: ' + err.message);
    }

    let createUsers = `create table if not exists users(
                            id INT AUTO_INCREMENT PRIMARY KEY,
                            email VARCHAR(255) NOT NULL,
                            created_at TIMESTAMP DEFAULT NOW(),
                            terms_accepted INT(1) NOT NULL DEFAULT '0'
                      )`;

    connection.query(createUsers, function (err, results, fields) {
        if (err) {
            console.log(err.message);
        }
    });

    // Inserting some fake data in users table - from line 38 to line 50
    // delete from line 38 to line 50 if you want empty users table
    var data = [];
    for (var i = 0; i < 10; i++) {
        data.push([
            faker.internet.email(),
            faker.date.past()
        ]);
    };

    var q = 'INSERT INTO users (email, created_at) VALUES ?';
    connection.query(q, [data], function (error, results) {
        if (error) throw error;
        console.log(results);
    });

    // connection.end(function (err) {
    //     if (err) {
    //         return console.log(err.message);
    //     }
    // });
});

app.get('/', function(req, res){
    var q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q, function(err, results){
        if (err) throw err;
        var count = results[0].count;
        res.render('home', {data: count});
    });
});

app.post('/register', function(req, res){
    var person = {
        email: req.body.email,
        terms_accepted: req.body.newsletterTerms ? '1' : '0' // set terms_accepted value in db to 1 or 0, depends on whether the checkbox is checked or not
    }
    console.log(person);
    
    connection.query('INSERT INTO users SET ?', person, function(err, result){
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(8080, function(){
    console.log('Server running on 8080!');
});