const express = require("express");
const router = express.Router();
const data = require("../data.js")

/*Index*/
router.get('/', function(req,res) {
    res.render('todont/index', {
        todont: data.seededTodonts
    });
});

/*New*/
router.get('/new', (req, res) => {
    res.render('todont/new');
});

/*Show*/
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todont = data.seededTodonts [id];
    console.log(todont);

    if (!todont){
        res.render('todos/show', {
            error: "No to-dont found with this ID"
        })
    } else {
        res.render('todont/show', {todont})
    }
}) 
/*Edit*/
router.get('/:id/edit', (req,res) => {
    res.render('todont/edit', {
        todont: {
            id: req.params.id,
            description: data.seededTodonts[req.params.id].description,
            urgent: data.seededTodonts[req.params.id].urgent,
        }
    })
})

/*Update*/ 
router.put('/:id', function(req,res) {
    var todontToEdit=data.seededTodonts[req.params.id];

    todontToEdit.description = req.body.description;
    todontToEdit.urgent = req.body.urgent;

    res.redirect('/todont');
});

router.post('/', (req,res) => {
    console.log(req.body)
    const newTodont = req.body;
    data.seededTodonts.push(newTodont);
    res.redirect('/todont')
});
// this is only deleting the first item
router.delete('/:id', function(req,res) {
    data.seededTodonts.splice(parseInt(req.params.id), 1);

    res.redirect('/todont');
});

module.exports = router;