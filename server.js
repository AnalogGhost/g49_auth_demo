require('dotenv').config();
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const token = require('./routes/token');
const superSecret = require('./routes/superSecret');


const jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(function (req,res,next) {
  if (req.cookies.token) {
    jwt.verify(req.cookies.token,process.env.JWT_SECRET, function (err,decoded) {
      if (err) {
        res.clearCookie('token');
        return next(err);
      }
      req.user = decoded;
      next();
    });
  } else {
    next();
  }
});

app.use('/token', token);

app.use('/superSecret', superSecret);

app.listen('3000');
