const mongoose = require('mongoose');

const CakeAboutSchema = mongoose.Schema({
  text: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('cakeabout', CakeAboutSchema);
