const express = require('express')
const app = express();
const hps = require('hbs')

app.set("view engine", "hbs");
app.use(express.static(__dirname + '/public'));

app.get('/greeting', function(req, res) {
    console.log(req.query);
    
    res.render('greeting', {
        saying: req.query.saying,
        name: "Hunter"
    });
});

app.get('/favorite-foods', (req,res) => {
    var favoriteFoods = ["Jeni's Almond Butter ice cream", 'Tacos from Superica', 'A Breakfast Sandwich from Gjelina to go in Venice', 'Croissants from Bottega Louie in Downtown Los Angeles', 'Pizza from Little Star in San Francisco']

        res.render('favorite-foods', {
        favoriteFoods: favoriteFoods
    })
});

const PORT = 3000

app.listen(PORT, ()  => { 
    console.log("Express id lisening on port ", PORT);
});