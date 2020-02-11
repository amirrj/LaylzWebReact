const mongoose = require('mongoose');

const getData = async (req, res, next) => {
  const beautyhome = await mongoose
    .model('beautyhome')
    .find()
    .exec();

  const cakehome = await mongoose
    .model('cakehome')
    .find()
    .exec();

  const beautyabout = await mongoose
    .model('beautyAbout')
    .find()
    .exec();

  const cakeabout = await mongoose
    .model('cakeAbout')
    .find()
    .exec();

  const beautywork = await mongoose
    .model('beautywork')
    .find()
    .exec();

  const cakework = await mongoose
    .model('cakework')
    .find()
    .exec();

  const beautyservices = await mongoose
    .model('beautyservice')
    .find()
    .exec();

  const cakeservices = await mongoose
    .model('cakeServices')
    .find()
    .exec();

  res.json({
    beautyhome,
    cakehome,
    beautyabout,
    cakeabout,
    beautywork,
    cakework,
    beautyservices,
    cakeservices
  });
};

exports.getData = getData;
