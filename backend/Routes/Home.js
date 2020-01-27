const mongoose = require('mongoose');

const BeautyHome = require('../models/BeautyHome');
const CakeHome = require('../models/CakeHome');

const updateHome = async (req, res, next) => {
  const home = req.route.path === '/api/beautyhome' ? BeautyHome : CakeHome;

  const createdHome = new home({
    SlideShowImages: req.body.SlideShowImages,
    Testimonials: req.body.Testimonials
  });

  const oldhome = await home.findOne();
  await home.findByIdAndDelete(oldhome.id);

  await createdHome.save();
  res.json('result');
};

const getHome = async (req, res, next) => {
  const home = req.route.path === '/api/beautyhome' ? BeautyHome : CakeHome;

  const result = await home.find().exec();
  res.json(result);
};

exports.updateHome = updateHome;
exports.getHome = getHome;
