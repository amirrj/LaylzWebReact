const mongoose = require('mongoose');

const BeautyHomeSchema = mongoose.Schema({
  SlideShowImages: [
    {
      image: {
        type: String,
        required: true
      },
      show: {
        type: Boolean,
        required: true,
        default: false
      }
    }
  ],
  Testimonials: [
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

module.exports = mongoose.model('beautyhome', BeautyHomeSchema);
