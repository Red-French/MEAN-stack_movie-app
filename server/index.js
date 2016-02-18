'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const _ = require('lodash');

const app = express();  // Create the application

// Add Middleware necessary for REST API's
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// TEST
// app.use('/hello', function(req, res, next) {
//   res.send('Hello World!');
//   next();
// });

// Connect to MongoDB
mongoose.connect('mongodb://localhost/meanmovieapp');  // replace 'localhost' with url of server if
mongoose.connection.once('open', function() {     // running on something other than this computer

  // Load the models
  app.models = require('./models/index');  // Declare the models.
                                           // A great way to take all of the models and dependency-inject
                                           // them into the controllers.
  // Load the routes
const routes = require('./routes'); // requiring routes.js
_.each(routes, function(controller, route) {  // Iterate over routes; assign controller's value to tne first 
                                              // callback ('controller') and assign the key 'movie' to 'route'

  app.use(route, controller(app, route));     // 
});


  console.log('Listening on port 3000...');       // 'meanmovieapp' is name of database
  app.listen(3000);
});


