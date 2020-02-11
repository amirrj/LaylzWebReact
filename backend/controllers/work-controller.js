const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

const { beautyWork, cakeWork } = require('../models/work-model');

const DUMMY_DATA = [
  {
    BeautyWork: [
      {
        id: 'bw1',
        title: 'Bridal Project',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, expedita.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum, facere dicta rerum harum sequi officiis? Repellendus, facilis eveniet nihil facere nostrum odio a enim',
        date: 'OCT.8, 2019',
        thumbnail: 'http://localhost:3000/images/beautywork-img1.jpg',
        images: [
          {
            id: 'bw1i1',
            image: 'http://localhost:3000/images/beautywork-img1.jpg',
            show: true
          },
          {
            id: 'bw1i2',
            image: 'http://localhost:3000/images/beautywork-img2.jpg',
            show: false
          },
          {
            id: 'bw1i3',
            image: 'http://localhost:3000/images/beautywork-img1.jpg',
            show: false
          },
          {
            id: 'bw1i4',
            image: 'http://localhost:3000/images/beautywork-img1.jpg',
            show: false
          }
        ]
      }
    ],
    CakeWork: [
      {
        id: 'cw1',
        title: 'Bithday Party Project',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, expedita.',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum voluptatum, facere dicta rerum harum sequi officiis? Repellendus, facilis eveniet nihil facere nostrum odio a enim',
        date: 'OCT.8, 2019',
        thumbnail: 'http://localhost:3000/images/cakework-img1.jpg',
        images: [
          {
            id: 'cw1i1',
            image: 'http://localhost:3000/images/cakework-img1.jpg',
            show: true
          },
          {
            id: 'cw1i2',
            image: 'http://localhost:3000/images/cakework-img2.jpg',
            show: false
          },
          {
            id: 'cw1i3',
            image: 'http://localhost:3000/images/cakework-img1.jpg',
            show: false
          },
          {
            id: 'cw1i4',
            image: 'http://localhost:3000/images/cakework-img1.jpg',
            show: false
          }
        ]
      }
    ]
  }
];

const getData = async (req, res, next) => {
  const path = req.route.path === '/beautywork' ? beautyWork : cakeWork;

  const data = await path.find();

  res.status(200).json(data);
};

const addWork = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError('Please check data and try again', 422));
  }
  const path = req.route.path === '/beautywork' ? beautyWork : cakeWork;

  const { title, text, description, date, thumbnail, images } = req.body;

  const createdWork = new path({
    title,
    text,
    description,
    date,
    thumbnail,
    images
  });

  try {
    createdWork.save();
  } catch (err) {
    const error = new HttpError(
      'Could not save data please check and try again',
      404
    );
    return next(error);
  }

  res.status(201).json({ Message: 'Work added' });
};

const deleteWork = async (req, res, next) => {
  const path = req.route.path === '/beautywork/:id' ? beautyWork : cakeWork;

  const id = req.params.id;

  let data;

  try {
    data = await path.findById(id);
  } catch (err) {
    const error = new HttpError(
      'Could not find data, please check and try again',
      404
    );
    return next(error);
  }

  try {
    data.remove();
  } catch (err) {
    const error = new HttpError(
      'Could not delete data, please check and try again',
      500
    );
    return next(error);
  }

  res.status(200).json({ Message: 'work deleted' });
};

const updateWork = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError('Please check data and try again', 422));
  }
  const path = req.route.path === '/beautywork/:id' ? beautyWork : cakeWork;

  const { title, text, description, date, thumbnail, images } = req.body;
  const id = req.params.id;
  let data;

  try {
    data = await path.findById(id);
  } catch (err) {
    const error = new HttpError(
      'Could not find any data, please check and try again',
      404
    );
    return next(error);
  }

  data.title = title;
  data.text = text;
  data.description = description;
  data.date = date;
  data.thumbnail = thumbnail;
  data.images = images;

  try {
    data.save();
  } catch (err) {
    const error = new HttpError(
      'Could not save data, please check and try again',
      500
    );
    return next(error);
  }

  res.status(200).json({ Message: 'Work Updated' });
};

exports.getData = getData;
exports.addWork = addWork;
exports.deleteWork = deleteWork;
exports.updateWork = updateWork;
