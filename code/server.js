const cookieParser = require('cookie-parser');
const { response } = require('express');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var urlecondedParser = bodyParser.urlencoded({ extended: false });

const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use('/static', express.static('public'));

// Database Connection
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'coffeegram',
    password: 'coffeegram2022',
    database: 'coffeegram'
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/menu', (req, res) => {
    res.render('menu');
});

app.post('/menu', urlecondedParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
});

app.get('/aero', (req, res) => {
    res.render('aero');
});

app.get('/coffeegrambtm', (req, res) => {
    res.render('coffeegrambtm');
});

/*app.all('*', (req, res) => {
    res.status(404).send("<h1>404</h1>");
}); */

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});