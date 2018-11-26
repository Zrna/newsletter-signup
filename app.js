var config = require('./config/config');
var mysql = require('mysql');
var connection = mysql.createConnection(config.databaseOptions);

var express = require("express");
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    var q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q, function (err, results) {
        if (err) throw err;
        var count = results[0].count;
        res.render('home', { data: count });
    });
});

app.post('/register', function (req, res) {
    var person = {
        email: req.body.email,
        terms_accepted: req.body.newsletterTerms ? '1' : '0' // set terms_accepted value in db to 1 or 0, depends on whether the checkbox is checked or not
    }
    console.log(person);

    let sqlCheckQuery = 'SELECT * FROM users WHERE email = ? LIMIT 1';

    connection.query(sqlCheckQuery, [person.email], function (error, results) {
        if (results.length) {
            console.log('The email ' + person.email + ' already exists.');
            res.render('error', {email: person.email, home: '/'});
        } else {
            connection.query('INSERT INTO users SET ?', person, function (err, result) {
                if (err) throw err;
                res.redirect('/');
            });
            console.log('Email ' + person.email + ' has been added to database.');
        }
    });
});

app.listen(8080, function () {
    console.log('Server running on localhost:8080');
});