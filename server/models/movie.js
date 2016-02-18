// models>movie.js
'use strict';

const mongoose = require('mongoose'); // an interface into MongoDB
                                    // also allows to provie models to MongoDB that map directly
                                    // to the database

// Create the MovieSchema
const MovieSchema = new mongoose.Schema({  // When working with models in Mongoose, there will be a schema.
  title: {        // title property      // The schema is where all of the properties are defined
    type: String,                        // for this object and what type the properties are.
    required: true
  },
  url: {          // url property
    type: String,
    required: true
  }
});

// export the model
module.exports = mongoose.model('movie', MovieSchema);  // whatever is required must be assigned to
                                                        // module.exports, because whatever has 
                                                        // required it, we'll pass it to them

