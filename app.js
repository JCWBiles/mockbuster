require('dotenv').config()
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var pg = require('pg');
var pg_store = require('connect-pg-simple');
var methodOverride = require('method-override');
var flash = require('express-flash-messages');
var bodyParser = require('body-parser')
var cors = require('cors')
var { pool } = require('./config')
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


const express = require('express');
const { Client } = require('pg');
const connectionString = 'postgres://postgres:postgres@localhost:5432/database';

const client = new Client({
    connectionString: connectionString
});

client.connect();

var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res, next) {
    client.query('SELECT * FROM films where id = $1', [1], function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
});

app.listen(3000, function () {
    console.log('Server is running.. on Port 3000');
});
