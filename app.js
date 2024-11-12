const express = require('express');
const session = require('express-session');
const passport = require('./middleware/passport');
const authRoutes = require('./routes/authRoute');
const indexRoutes = require('./routes/indexRoute');
const app = express();

// Set the view engine to EJS (or any other view engine you prefer)
app.set('view engine', 'ejs');

// Optionally, specify the directory for views
app.set('views', './views');

// Set up session management
app.use(session({
  secret: 'your-session-secret',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use the authentication routes
app.use('/', authRoutes);
app.use('/', indexRoutes);


// Start the server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
