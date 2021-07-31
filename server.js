const express = require('express');
require("dotenv").config();

const PORT = 3000;


const morgan = require("morgan");
const session = require("express-session");
const passport = require("passport");
const methodOverride = require("method-override");


// Internal Modules
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const exercisesRouter = require("./routes/exercises");
const notesRouter = require("./routes/notes");

//Connect to the MongoDB with Mongoose
require("./config/database");
require("./config/passport");

const app = express();



//View Engine Set up
app.set('view engine', 'ejs');



//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static('public'));
app.use(express.json());

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
app.use('/',exercisesRouter);
app.use('/', notesRouter);

// Server Listner
app.listen(PORT, function() {
    console.log(`Live on port ${PORT}`);
})