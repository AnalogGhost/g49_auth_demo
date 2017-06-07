require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const token = require('./routes/token');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

const jwt = require('jsonwebtoken');

app.use('/token', token);

app.listen('3000');
