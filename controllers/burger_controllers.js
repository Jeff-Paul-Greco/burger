
var express = require('express');
var burger = require("../models/burger");
var router = express.Router();

//returns burgers to home route
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        res.render("index", { burgers: data });
    });
});

//post new burger from form inputs
router.post("/burgers/add", function (req, res) {
    burger.insertOne(req.body, function (data) {
        res.redirect("/");
    });
});

//grabs id from paramaters of burger whos status is to be changed to devoured
router.put("/burgers/:id", function (req, res) {
    burger.updateOne({ devoured: 1 }, req.params.id, function (data) {
        res.sendStatus(200);
    });
});

module.exports = router