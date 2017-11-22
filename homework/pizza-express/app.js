var express = require('express');
var app = express();
var port = 3000;




app.get('/', function (req, res, next) {
  res.send("Welcome to Pizza Express!");
});
app.get('/topping/:type', function(req, res, next) {
  res.send("something pizza good choice!")
});
app.get('/order/:amount/:size', function (req, res, next) {
  res.send (something)
});

app.listen(port, function () {
  console.log('LISTENING ON PORT ' + port);
});