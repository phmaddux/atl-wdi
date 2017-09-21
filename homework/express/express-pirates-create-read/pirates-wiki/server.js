var express = require('express');
var hbs = require('hbs');

var app = express();
var port = process.env.PORT || 3000;
const pirateController = require("./controllers/pirates")


/*Views*/
app.set('view engine', 'hbs');

/* Controllers*/ 
//var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);



app.listen(port, function() {
    console.info('Server UP, Port ' + port + ' is ready.', new Date());
})