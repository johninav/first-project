const mongoose = require("mongoose");
const User = require("../models/users");

const userController = {};

userController.list = function(req, res) {
  User.find({}).exec(function(err, users) {
    if (err) {
      console.log("Error:", err);
    } else {
      res.render("index", { users });
    }
  });
};

module.exports = userController;