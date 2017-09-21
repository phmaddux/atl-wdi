var express = require("express")
var router = express.Router();
router.get('/', (req, res) => {
    res.send("Hidey-ho there neeeeeighboroony")
})

router.get("/greeting", (req, res) => {
    res.render("greeting", {
    name: req.query.name
    })
})

module.exports = router