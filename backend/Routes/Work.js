const mongoose = require('mongoose');

const CakeWork = require('../models/CakeWork');
const BeautyWork = require('../models/BeautyWork');

const createWork = async (req, res, next) => {
  const work = req.route.path === '/api/beautywork' ? BeautyWork : CakeWork;

  const createdWork = new work({
    title: req.body.title,
    text: req.body.text,
    description: req.body.description,
    thumbnail: req.body.thumbnail,
    images: req.body.images
  });

  await createdWork.save();

  res.json(createdWork);
};

const getWork = async (req, res, next) => {
  const work = req.route.path === '/api/beautywork' ? BeautyWork : CakeWork;

  const result = await work.find().exec();
  res.json(result);
};

const getWorkById = async (req, res, next) => {
  const id = req.params.id;

  const work = req.route.path === '/api/beautywork/:id' ? BeautyWork : CakeWork;

  const result = await work.findById(id);
  res.json(result);
};

exports.createWork = createWork;
exports.getWork = getWork;
exports.getWorkById = getWorkById;
