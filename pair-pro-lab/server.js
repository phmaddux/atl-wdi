const express = require("express");
const app = express();
const hbs = require("hbs");

app.set("view engine", "hbs");

var mathController = require('./controller/math.js');
app.use("/math", mathController);

var greetingController = require('./controller/greeting.js');
app.use("/greeting", greetingController);

const PORT = 3000
app.listen(PORT, () => {
    console.log("Hello " + PORT)
});
