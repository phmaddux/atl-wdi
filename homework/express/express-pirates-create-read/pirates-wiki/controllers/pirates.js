//requirements
var express = require("express");
var router = express.Router();
var data = require('../models/pirates.js');

// Index Pirates
router.get("/index", (req, res) => {
    res.render("pirates/index", {
        pirates: pirates.allPirates
    })
});

// New Pirates
router.get('/new', (req,res) => {
    res.render('pirates/new');
});

// Show Pirates
router.get('/:id', (req,res) => {
    const id = parseInt(req.params.id);
    const pirates = data.allPirates[id];
    console.log(pirates);

    if (!pirates){
        res.render('pirates/show', {
            error: "No pirate found with this ID"
        })
    } else {
        res.render('pirates/show', {pirates})
    }
});

// Post Pirates
router.post('/', (req, res) => {
    console.log(req.body)
    const newPirates = req.body;
    data.allPirates.push(newTodo);
    res.redirect('/pirates/index');
});

//exports
module.exports = router