


// var express = require("express");

// var router = express.Router();

var db = require("../models");
var path = require("path");



// Import the model (cat.js) to use its database functions.
// var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

module.exports = function(app){
  app.get("/", function(req, res){
    db.burgers.findAll({}).then(function(data) {
      var hbsObject ={
        burgers :data
      };
      console.log("This is"+ JSON.stringify(hbsObject));
      res.render("index",hbsObject);
    });
  });

  app.get("/api/all", function(req, res){
    db.burgers.findAll({}).then(function(data) {
      var hbsObject ={
        burgers :data
      };
      res.render("index",hbsObject);
    });
  });

  app.post("/api/burgers", function(req, res) {
    db.burgers.create({
        burger_name: req.body.burger_name
    }).then(function() {
        res.redirect("/");
    }) .catch(function(err){
       res.send(err);
     });;
  });

  // app.post("/api/burgers", function(req, res){
  //   db.burgers.create({
  //     burger_name :req.body.burger_name,
  //     devoured :true
  //   }).then(function(data){
  //     //  res.json(data);
  //     //res.redirect("/");
  //     res.json({ id: data.id });


  //   })
    // .catch(function(err){
    //   res.send(err);
    // });
  // });
  app.put("/api/burgers/:id", function(req, res) {
    db.burgers.update({
        devoured: true
    },
    {
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect("/");
    });
  })
  // app.put("/api/burgers/:id", function(req, res){

  //   db.burgers.update(req.body, {
      
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(data) {
  //       res.json(data);
  //     });
  
  // });

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
