const express = require("express");
const mongoose = require("mongoose");
const passport = require('passport');

const path = require("path");
const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8080;
const app = express();

const user = require('./routes/api/user')
const books = require('./routes/api/books')

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI

//Connect to the Mongo DB
mongoose.connect(db,{useNewUrlParser: true })
        .then(() => console.log('MongoDb Connected!!'))
        .catch(err => console.log(err));

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Passport middleware config
app.use(passport.initialize());


// Routes
app.use('/api/user', user);
app.use('/api/books', books)



// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
