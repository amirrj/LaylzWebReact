const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const image = new Schema({
  image: { type: String, required: true },
  show: { type: Boolean, required: true, default: false }
});

const home = new Schema({
  slideShowImages: [image],
  testimonials: [
    {
      author: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      show: {
        type: Boolean,
        required: true,
        default: false
      }
    }
  ]
});

exports.beautyHome = mongoose.model('beautyhome', home);
exports.cakeHome = mongoose.model('cakehome', home);
