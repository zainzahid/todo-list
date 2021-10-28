// Import express 
let express = require('express');

// Create express app
let app = express(); 

// import mongoose cdm
var mongoose = require('mongoose');


// Import todo routes from todo.js
let todoRoutes = require('./todo');

// parse application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

const cors = require('cors');
app.use(cors());

// set donenv to access db connection string from .env
const dotenv = require('dotenv');
dotenv.config()

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser : true, 
  useUnifiedTopology: true }, function(error) {
      if (error) {
          console.log("Error!" + error);
      } else {
        console.log("Connected!");
      }
  });

// Tell express to use your route
app.use(todoRoutes);

// Error Handler for 404.. Resource not found
app.use( (req, res) => {
    res.status(404).send('We think you are lost');
} );

// Any Unhandeled exception will be pointed here 
app.use( (err, req, res, next) => {
    console.error(err.stack);
} );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => { console.log('Server Started') });

module.exports = app;

