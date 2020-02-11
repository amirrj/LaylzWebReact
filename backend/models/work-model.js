const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const work = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [
    {
      image: { type: String, required: true },
      show: { type: Boolean, required: true, default: false }
    }
  ]
});

exports.beautyWork = mongoose.model('beautywork', work);
exports.cakeWork = mongoose.model('cakework', work);
