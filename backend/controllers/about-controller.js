const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

const { beautyAbout, cakeAbout } = require('../models/about-model');

const DUMMY_DATA = [
  {
    BeautyAbout: {
      id: 'ba1',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Animi maxime quis quibusdam iusto expedita.Perferendis, officiis at? Illo fugit ex quaerat earum libero? Exercitationem, repellat nesciunt unde sed vitae nihil ex placeat, necessitatibus deleniti culpa temporibus eveniet Officia aliquam, temporibus quis quo quasi numquam ut? Autem obcaecati harum asperiores qui hic soluta, earum, eveniet ex distinctio quis aliquam sequi nihil in totam libero cupiditate sunt odit quaerat blanditiis, ratione quod explicabo excepturi.'
    },
    CakeAbout: {
      id: 'ca1',
      text:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit.Animi maxime quis quibusdam iusto expedita.Perferendis, officiis at? Illo fugit ex quaerat earum libero? Exercitationem, repellat nesciunt unde sed vitae nihil ex placeat, necessitatibus deleniti culpa temporibus eveniet Officia aliquam, temporibus quis quo quasi numquam ut? Autem obcaecati harum asperiores qui hic soluta, earum, eveniet ex distinctio quis aliquam sequi nihil in totam libero cupiditate sunt odit quaerat blanditiis, ratione quod explicabo excepturi.'
    }
  }
];

const getData = async (req, res, next) => {
  const path = req.route.path === '/beautyabout' ? beautyAbout : cakeAbout;

  let data;

  try {
    data = await path.find().exec();
  } catch (err) {
    const error = new HttpError(
      'Could not find data, Please check and try again',
      500
    );
    return next(error);
  }

  res.status(200).json(data);
};

const createAbout = async (req, res, next) => {
  const path = req.route.path === '/beautyabout' ? beautyAbout : cakeAbout;

  const { text } = req.body;

  const createdAbout = new path({
    text
  });

  await createdAbout.save();

  res.status(201).json({ Message: 'About Created' });
};

const updateAbout = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError('Please check input data and try again'));
  }
  const path = req.route.path === '/beautyabout' ? beautyAbout : cakeAbout;

  let updatedAbout;
  const { text } = req.body;

  try {
    updatedAbout = await path.findOne();
  } catch (err) {
    const error = new HttpError(
      'Could not find data, please check and try again',
      404
    );
  }

  updatedAbout.text = text;

  try {
    await updatedAbout.save();
  } catch (err) {
    const error = new HttpError(
      'Could not save new updates to database, please check and try again',
      500
    );
  }

  res.status(200).json({ Message: 'Updated About' });
};

exports.getData = getData;
exports.createAbout = createAbout;
exports.updateAbout = updateAbout;
