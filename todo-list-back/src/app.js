// Import express 
let express = require('express');

// Create express app
let app = express(); 

// Import path to create path from current or app_root directory
let path = require('path');

// parse application/x-www-form-urlencoded
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

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

