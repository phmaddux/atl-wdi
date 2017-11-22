var express = require('express');
var app = express();
var port = 3000;

var hbs = require('hbs');

app.set("view engine", "hbs");
app.set('views', './views');

app.get('/', (req, res)=>{
  res.render('index')
})

app.get('/topping/:type', (req, res)=>{
  res.render('toppings', {
     type: req.params.type
  })
})

app.get('/order/:amount/:size', (req, res)=>{
  res.render('order', {
     amount: req.params.amount,
     size: req.params.size
  });
})



// app.get("/test/:someValue", function(req, res, next){
//   res.render('index.hbs', {
//     message: req.params.someValue
//   })
// })

// app.get('/', function (req, res, next) {
//   res.send("Welcome to Pizza Express!");
// });
// app.get('/topping/:type', function(req, res, next) {
//   res.send("something pizza good choice!")
// });
// app.get('/order/:amount/:size', function (req, res, next) {
//   res.send ("something")
// });

app.listen(port, function () {
  console.log('LISTENING ON PORT ' + port);
});