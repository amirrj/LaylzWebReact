const mongoose = require('mongoose');

const BeautyServiceSchema = mongoose.Schema({
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
    default: false
  }
});

module.exports = mongoose.model('beautyservice', BeautyServiceSchema);
