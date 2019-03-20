const mongoose = require('mongoose');
const httpStatus = require('http-status');
const { omitBy, isNil } = require('lodash');
const uuidv4 = require('uuid/v4');

// Fleet Categories
const categories = ["car", "truck"];

// Fleet Schema
 
const fleetSchema = new mongoose.Schema({
  fleetname: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
  fleetinfo: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
  contactname: {
      type: String,
      trim: true
    },
    longitude: {
      type: Number,
    },
    latitude: {
      type: Number,
    },
    mobile: {
      type: String,
      trim: true,
    },
  category: {
    type: String,
    enum: categories,
    default: "car"
  },
  trackingnumber: {
    type: String,
    default: uuidv4(),
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Fleet', fleetSchema);
