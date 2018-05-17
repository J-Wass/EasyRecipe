var express = require('express');
var app = express();
var path = require('path');
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(':memory:')

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/test/:param1/:param2', function (req, res) {
  console.log("testing")
  res.send('this is a test:' + req.params.param1 + ", " + req.params.param2);
});

app.listen(3000, function () {
  console.log('Running on port 3000...');
});

//REACT SPECIAL FILES
app.get('/static/js/main.js', function (req, res) {
  res.sendFile(__dirname + '/static/js/main.js');
});
app.get('/static/js/main.js.map', function (req, res) {
  res.sendFile(__dirname + '/static/js/main.js.map');
});
app.get('/static/css/main.css', function (req, res) {
  res.sendFile(__dirname + '/static/css/main.css');
});
app.get('/static/css/main.css.map', function (req, res) {
  res.sendFile(__dirname + '/static/css/main.css.map');
});
