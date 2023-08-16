const express = require("express");
const User = require("./models/user");

const router = new express.Router();

router.get("/", async function (req, res, next) {
  try {
    return res.render("homepage.html");
  } catch (err) {
    return next(err);
  }
});

router.get("/users", async function (req, res, next) {
  try {
    const users = await User.all();
    return res.render("users.html", { users });
  } catch (error) {
    return next(err);
  }
});

router.get("/addUser", function (req, res, next) {
  try {
    return res.render("form.html");
  } catch (error) {
    return next(error);
  }
});

router.post("/addUser", async function (req, res, next) {
  try {
    const email = req.body.email;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const user = new User({
      email,
      first_name: firstName,
      last_name: lastName,
    });
    console.log(user);
    await user.save();
    return res.redirect("/");
  } catch (err) {
    console.log(err);
    return next(err);
  }
});

module.exports = router;
