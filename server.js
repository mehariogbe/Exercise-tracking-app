const express = require('express');
const PORT = 3000;
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");

require("dotenv").config();

const app = express();


//Connect to the MongoDB with Mongoose
require("./config/database");
require("./config/passport");


//Routes Section




//View Engine Set up
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
      secret: "SEIRFLEXRocks!",
      resave: false,
      saveUninitialized: true,
    })
  );

app.use(passport.initialize());
app.use(passport.session());




app.listen(PORT, function() {
    console.log(`Live on port ${PORT}`);
})