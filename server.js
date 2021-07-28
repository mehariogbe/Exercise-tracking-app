const express = require('express');
const PORT = 3000;
const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");



const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

require("dotenv").config();

const app = express();


//Connect to the MongoDB with Mongoose
require("./config/database");
require("./config/passport");







//View Engine Set up
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(
    session({
      secret: "SEIRFLEXRocks!",
      resave: false,
      saveUninitialized: true,
    })
  );

app.use(passport.initialize());
app.use(passport.session());

//Routes Section
app.use('/', indexRouter);
app.use('/users', usersRouter);


app.listen(PORT, function() {
    console.log(`Live on port ${PORT}`);
})