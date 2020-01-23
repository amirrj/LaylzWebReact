const mongoose = require('mongoose');

const CakeWorkSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date: {
    type: String
  },
  thumbnail: {
    type: String,
    required: true
  },
  images: [
    {
      image: {
        type: String,
        required: true
      },
      show: {
        type: Boolean,
        default: false,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model('cakework', CakeWorkSchema);
