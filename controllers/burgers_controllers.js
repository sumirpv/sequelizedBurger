


// var express = require("express");

// var router = express.Router();

var db = require("../models");


// Import the model (cat.js) to use its database functions.
// var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

module.exports = function(app){
  app.get("/", function(req, res){
    db.burgers.findAll({}).then(function(data) {
      // We have access to the todos as an argument inside of the callback function
      res.json(data);
    });
  });

  app.post("/api/burgers", function(req, res){
    db.burgers.create(req.body).then(function(data){
      res.json({data});
    })
    .catch(function(err){
      res.send(err);
    });
  });

  app.put("/api/burgers/:id", function(req, res){

    db.burgers.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(function(data) {
        res.json(data);
      });
  
  });

  app.delete("/api/burgers/:id", function(req, res){

    db.burgers.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(result) {
        res.json(result);
      });
  });

};
