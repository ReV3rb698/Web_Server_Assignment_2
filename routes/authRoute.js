const express = require("express");
const passport = require("passport");
const { title } = require("process");


const router = express.Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Home" , salut: "Hello World"});
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/check_admin",
    failureRedirect: "/login",
  })(req, res, next);
});

// Route to start Google OAuth authentication
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Callback route after Google authentication
router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Successful authentication, redirect to the secured part of the application
    res.redirect("/dashboard"); // Replace with your desired redirect
  }
);

router.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) { return next(err); }
        res.redirect("/");
    });
});
module.exports = router;
