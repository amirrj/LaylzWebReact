const mongoose = require('mongoose');

const BeautyAboutSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('beautyabout', BeautyAboutSchema);
