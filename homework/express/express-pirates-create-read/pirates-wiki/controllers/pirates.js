
const express = require("express");
const router = express.Router();
const pirates = require('../models/pirates.js');

//Index
router.get("/", (req, res) => {
    const id = parseInt(req.params.id);
    console.log(pirates);
    res.render("pirates/index", {
        pirates: pirates
    });
});
//New
router.get("/new", (req, res) => {
    res.render("pirates/new");
})
//Show
router.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const pirate = pirates[id];
    res.render("pirates/show", {
        pirate: pirate
    });

})

// Post
router.post("/", (req, res) => {
    console.log(req.body);
    const newPirate = req.body;
    pirates.push(newPirate);
    res.redirect('/pirates')
});

module.exports = router;