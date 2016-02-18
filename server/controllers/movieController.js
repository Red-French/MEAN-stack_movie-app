'use strict';

const Resource = require('resourcejs');
// const restful = require('node-restful');

module.exports = function(app, route) {

  // Set up the controller for REST;
  Resource(app, '', route, app.models.movie).rest();  // pass in the route and app for this controller
                                                      // app.movie was declared in server.js and is a 
                                                      // a collection of all models 

  // Return middleware
  return function(req, res, next) {
    next();
  };
};
