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
    database: 'coffeegram-menu'
});

app.get('/', (req, res) => {
    console.log("Entering welcome page");
    res.render('index');
});

app.get('/menu', (req, res) => {
    console.log("Entering menu page");
    res.render('menu');
});

app.all('*', (req, res) => {
    console.log("Entering 404 page");
    res.status(404).send("<h1>404</h1>");
});

app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
});