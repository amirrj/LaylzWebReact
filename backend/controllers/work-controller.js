const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

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

const getData = (req, res, next) => {
  const path = req.route.path === '/beautywork' ? 'BeautyWork' : 'CakeWork';

  const data = DUMMY_DATA[0][path];

  if (!data) {
    return next(new HttpError('Data Not Found', 404));
  }

  res.status(200).json(data);
};

const addWork = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError('Please check data and try again', 422));
  }
  const path = req.route.path === '/beautywork' ? 'BeautyWork' : 'CakeWork';

  const { id, title, text, description, date, thumbnail, images } = req.body;

  const createdWork = {
    id,
    title,
    text,
    description,
    date,
    thumbnail,
    images
  };

  DUMMY_DATA[0][path].push(createdWork);
  res.status(201).json(createdWork);
};

const deleteWork = (req, res, next) => {
  const path = req.route.path === '/beautywork/:id' ? 'BeautyWork' : 'CakeWork';

  const id = req.params.id;
  const newWork = DUMMY_DATA[0][path].filter(w => w.id !== id);

  DUMMY_DATA[0][path] = newWork;

  res.status(200).json({ Message: 'work deleted' });
};

const updateWork = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError('Please check data and try again', 422));
  }
  const path = req.route.path === '/beautywork/:id' ? 'BeautyWork' : 'CakeWork';

  const { title, text, description, date, thumbnail } = req.body;
  const id = req.params.id;

  const updatedWork = { ...DUMMY_DATA[0][path].find(w => w.id === id) };

  if (
    Object.entries(updatedWork).length === 0 &&
    updatedWork.constructor === Object
  ) {
    return next(new HttpError('Could Not Find Any Work With That ID', 404));
  }

  updatedWork.title = title;
  updatedWork.text = text;
  updatedWork.description = description;
  updatedWork.date = date;
  updatedWork.thumbnail = thumbnail;

  const workIndex = DUMMY_DATA[0][path].findIndex(w => w.id === id);

  DUMMY_DATA[0][path][workIndex] = updatedWork;

  res.status(200).json({ Message: 'Work Updated' });
};

const addImage = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError('Please check data and try again', 422));
  }
  const path =
    req.route.path === '/beautywork/images/:wid' ? 'BeautyWork' : 'CakeWork';

  const { id, image, show } = req.body;
  const newImage = {
    id,
    image,
    show
  };

  const workID = req.params.wid;

  const workIndex = DUMMY_DATA[0][path].findIndex(w => w.id === workID);

  if (workIndex === -1) {
    return next(new HttpError('Could not find any work with that id', 404));
  }

  DUMMY_DATA[0][path][workIndex].images.push(newImage);

  res.status(201).json({ Message: 'Image Added' });
};

const deleteImage = (req, res, next) => {
  const path =
    req.route.path === '/beautywork/images/:wid/:iid'
      ? 'BeautyWork'
      : 'CakeWork';

  const workID = req.params.wid;
  const imageID = req.params.iid;

  const workIndex = DUMMY_DATA[0][path].findIndex(w => w.id === workID);

  if (workIndex === -1) {
    return next(new HttpError('Could not find any data with that id'));
  }

  const newImages = DUMMY_DATA[0][path][workIndex].images.filter(
    i => i.id !== imageID
  );

  console.log(newImages);

  DUMMY_DATA[0][path][workIndex].images = newImages;

  res.status(200).json({ Message: 'Image Deleted' });
};

exports.getData = getData;
exports.addWork = addWork;
exports.deleteWork = deleteWork;
exports.updateWork = updateWork;
exports.addImage = addImage;
exports.deleteImage = deleteImage;
