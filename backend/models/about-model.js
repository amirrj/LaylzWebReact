const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const about = new Schema({
  text: { type: String, required: true }
});

exports.beautyAbout = mongoose.model('beautyAbout', about);
exports.cakeAbout = mongoose.model('cakeAbout', about);
