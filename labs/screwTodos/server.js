var express = require ('express');
var hbs = require('hbs');
const bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();
var port = process.env.PORT || 3000;
const todontController = require("./controllers/todont")

app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended: true}));


app.set('view engine', 'hbs');

app.use("/todont", todontController);


app.get('/', function(req,res) {
    res.send('This is our Home Page');
  });

app.listen(port,function() {
    console.info('Server Up: Port', port, new Date());
});