const express = require('express');
const isAuthenticated = require('../middleware/checkAuth');

const router = express.Router();

router.get('/portfolio', isAuthenticated, (req, res) => {
  res.render('portfolio', { user: req.user });
});

module.exports = router;
