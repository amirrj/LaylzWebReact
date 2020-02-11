const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const service = new Schema({
  service: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  open: {
    type: Boolean,
    required: true,
    default: false
  }
});

exports.beautyServices = mongoose.model('beautyservice', service);
exports.cakeServices = mongoose.model('cakeServices', service);
