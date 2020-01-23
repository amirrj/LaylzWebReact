const mongoose = require('mongoose');

const BeautyService = require('../models/BeautyServices');
const CakeService = require('../models/CakeServices');

const createService = async (req, res, next) => {
  const service =
    req.route.path === '/api/beautyservices' ? BeautyService : CakeService;

  const createdService = new service({
    service: req.body.service,
    img: req.body.img,
    detail: req.body.detail,
    price: req.body.price,
    open: req.body.open
  });

  const result = await createdService.save();

  res.json(result);
};

const getService = async (req, res, next) => {
  const service =
    req.route.path === '/api/beautyservices' ? BeautyService : CakeService;

  const results = await service.find().exec();
  res.json(results);
};

exports.createService = createService;
exports.getService = getService;
