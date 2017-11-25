const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


app.set('view engine', 'hbs');
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

const pirateController = require('./controllers/pirates.js');

app.use("/pirates", pirateController);
app.use('/pirates', piratesController);

app.listen(PORT, () => {
   console.log("Working on on port..." + PORT)
})