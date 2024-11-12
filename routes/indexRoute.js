const express = require("express");
const isAuthenticated = require("../middleware/checkAuth");

const router = express.Router();

router.get('/dashboard', isAuthenticated, (req, res) => {
    res.render('dashboard', { user: req.user });
  });


module.exports = router;