// const express     = require('express');
// const hbs  = require('hbs');
// const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
// const app  = express();

// var pirateController = require('./controllers/pirates.js');

// const PORT = process.env.PORT || 3000;
// app.use(methodOverride('_method'));

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
// app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.use("/pirates", pirateController);

app.listen(PORT, () => {
    console.info('Server running on', PORT);
});