var express = require("express")
var router = express.Router();
router.get('/', (req, res) => {
    res.send("Hey the page is working")
})

router.get("/:operator", (req, res) => {
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    if (req.params.operator === "add") {
        res.send(`${num1 + num2}`);
    } else if (req.params.operator === "subtract") {
        res.send(`${num1 - num2}`);
    } else if (req.params.operator === "multiply") {
        res.send(`${num1 * num2}`);
    } else if (req.params.operator === "divide") {
        res.send(`${num1 / num2}`)
    }
})


module.exports = router