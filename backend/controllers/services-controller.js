const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

const { beautyServices, cakeServices } = require('../models/service-model');

const DUMMY_DATA = [
  {
    BeautyServices: [
      {
        id: 'bs1',
        service: 'Bridal Service',
        img: 'http://localhost:3000/images/beautyservices-tile1.jpg',
        detail:
          'As ipsum dolor sit amet consectetur adipisicing elit.Quibusdam animi aperiam nihil aspernatur numquam reprehenderit, debitis praesentium earum neque inventore.',
        price: 25.9,
        open: false
      }
    ],
    CakeServices: [
      {
        id: 'CS1',
        service: 'Cake',
        img: 'http://localhost:3000/images/cakeservices-tile1.jpg',
        detail:
          'As ipsum dolor sit amet consectetur adipisicing elit.Quibusdam animi aperiam nihil aspernatur numquam reprehenderit, debitis praesentium earum neque inventore.',
        price: 25.9,
        open: false
      }
    ]
  }
];

const getData = async (req, res, next) => {
  const path =
    req.route.path === '/beautyservices' ? beautyServices : cakeServices;

  const data = await path.find().exec();

  res.json(data);
};

const createService = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs recieved, please check data', 422)
    );
  }
  const path =
    req.route.path === '/beautyservices' ? beautyServices : cakeServices;

  const { service, img, detail, price, open } = req.body;

  const newService = new path({
    service,
    img,
    detail,
    price,
    open
  });

  await newService.save();

  res.status(201).json({ Message: 'Service Created' });
};

const updateService = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs recieved, please check data', 422)
    );
  }
  const path =
    req.route.path === '/beautyservices/:id' ? beautyServices : cakeServices;

  const id = req.params.id;
  const { service, img, detail, price } = req.body;
  let updatedService;

  try {
    updatedService = await path.findById(id);
  } catch (err) {
    const error = new HttpError(
      'Could not update service, please check and try again',
      500
    );
    return next(error);
  }

  updatedService.service = service;
  updatedService.img = img;
  updatedService.detail = detail;
  updatedService.price = price;

  try {
    updatedService.save();
  } catch (err) {
    const error = new HttpError(
      'Could not update service, please check and try again',
      500
    );
    return next(error);
  }

  res.status(200).json({ Message: 'Service Updated' });
};

const deleteService = async (req, res, next) => {
  const path =
    req.route.path === '/beautyservices/:id' ? beautyServices : cakeServices;

  const id = req.params.id;

  let service;

  try {
    service = await path.findById(id);
  } catch (err) {
    const error = new HttpError(
      'Could not delete service, please check and try again',
      500
    );
    return next(error);
  }

  try {
    await service.remove();
  } catch (err) {
    const error = new HttpError(
      'Could not delete service, please check and try again'
    );
    return next(error);
  }

  res.status(200).json({ Message: 'service deleted' });
};

exports.getData = getData;
exports.createService = createService;
exports.updateService = updateService;
exports.deleteService = deleteService;
