// Require necessery packages and files
var express = require("express");

var burger = require("../models/burger.js");

var router = express.Router();
// Set basic route to get all database information for homepage
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject)
    });
});
// Set route for adding new items to database
router.post("/api/burgers", function(req, res) {
    burger.create(["burgername"], [req.body.burgername], function(result) {
        res.json({ id: result.insertID });
    });
});
// Set route for changing items in the database
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.update(req.body.devoured, req.params.id, function(result) {
        console.log(result);
        res.render("index");
    });


})

module.exports = router;