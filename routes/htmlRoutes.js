var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Characters.findAll({}).then(function(data) {
      res.render("index", {
        msg: "Welcome!",
        characters: data
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Characters.findOne({
      where: { id: req.params.id }
    }).then(function(data) {
      res.render("example", {
        characters: data
      });
    });
  });

  app.get("/character/:category", function(req, res) {
    db.Characters.findAll({
      where: { category: "monster" }
    }).then(function(data) {
      res.render("example", {
        characters: data
      });
      console.log(data);
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
