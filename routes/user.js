const User = require("../model/user");

exports.create = function (req, res) {
  res.render("user-form", { title: "Create user", buttonText: "Join!" });
};
exports.doCreate = function (req, res) {
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      modifiedOn: Date.now(),
      lastLogin: Date.now(),
    },
    function (err, user) {
      console.log(err);
      console.log("User created and saved: " + user);
      console.log(user.id);
    }
  );
  res.status(200).json("sent sucess");
};
