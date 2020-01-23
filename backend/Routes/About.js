const mongoose = require('mongoose');

const BeautyAbout = require('../models/BeautyAbout');
const CakeAbout = require('../models/CakeAbout');

const updateText = async (req, res, next) => {
  const about = req.route.path === '/api/beautyabout' ? BeautyAbout : CakeAbout;

  const newText = new about({
    text: req.body.text
  });

  const oldText = await about.findOne();
  await about.findOneAndRemove(oldText.id, {
    useFindAndModify: false
  });
  const result = await newText.save();
  res.json(result);
};

const setText = async (req, res, next) => {
  const about = req.route.path === '/api/beautyabout' ? BeautyAbout : CakeAbout;
  const newText = new about({
    text: req.body.text
  });

  const result = newText.save();
  res.json(result);
};

const getAbout = async (req, res, next) => {
  const about = req.route.path === '/api/beautyabout' ? BeautyAbout : CakeAbout;

  const result = await about.find().exec();
  res.json(result);
};

exports.updateText = updateText;
exports.getAbout = getAbout;
exports.setText = setText;
