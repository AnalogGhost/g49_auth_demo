const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const token = require('./routes/token');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/token', token);

app.listen('3000');
