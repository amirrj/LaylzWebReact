const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

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

const getData = (req, res, next) => {
  const path =
    req.route.path === '/beautyservices' ? 'BeautyServices' : 'CakeServices';

  const data = DUMMY_DATA[0][path];

  if (!data) {
    return next(new HttpError('Data Not Found', 404));
  }

  res.json(data);
};

const createService = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs recieved, please check data', 422)
    );
  }
  const path =
    req.route.path === '/beautyservices' ? 'BeautyServices' : 'CakeServices';

  const { id, service, img, detail, price, open } = req.body;

  const newService = {
    id,
    service,
    img,
    detail,
    price,
    open
  };

  DUMMY_DATA[0][path].push(newService);

  res.status(201).json({ Message: 'Service Created' });
};

const updateService = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs recieved, please check data', 422)
    );
  }
  const path =
    req.route.path === '/beautyservices/:id'
      ? 'BeautyServices'
      : 'CakeServices';

  const id = req.params.id;
  const { service, img, detail, price } = req.body;

  const updatedService = { ...DUMMY_DATA[0][path].find(s => s.id === id) };
  const serviceIndex = DUMMY_DATA[0][path].findIndex(s => s.id === id);
  updatedService.service = service;
  updatedService.img = img;
  updatedService.detail = detail;
  updatedService.price = price;

  DUMMY_DATA[0][path][serviceIndex] = updatedService;

  res.status(200).json({ Message: 'Service Updated' });
};

const deleteService = (req, res, next) => {
  const path =
    req.route.path === '/beautyservices/:id'
      ? 'BeautyServices'
      : 'CakeServices';

  const id = req.params.id;

  if (!DUMMY_DATA[0][path].find(s => s.id === id)) {
    return next(
      new HttpError(
        'Could not find service with that id, please check and try again'
      )
    );
  }

  DUMMY_DATA[0][path] = DUMMY_DATA[0][path].filter(s => s.id !== id);

  res.status(200).json({ Message: 'service deleted' });
};

exports.getData = getData;
exports.createService = createService;
exports.updateService = updateService;
exports.deleteService = deleteService;
