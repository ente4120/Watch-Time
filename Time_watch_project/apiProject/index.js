var express = require('express');
var app = express();
var employee = require('./employee');
var employees = require('./employees');
var watch = require('./watch');
var cors = require('cors');

 app.use(cors())

//app.use(function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//  next();});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.use('*/employee', employee);
app.use('*/employees', employees);
app.use('*/watch', watch);
