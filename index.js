var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var envVars = require('dotenv').config();
var backendPort = process.env.BACKEND_PORT;
var mailRouter = require('./routes/mail');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use('/mail', mailRouter);

app.listen(backendPort, () => {
  console.log(`Backend Started on ${backendPort}`);
})