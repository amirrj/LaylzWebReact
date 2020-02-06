const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

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

const getData = (req, res, next) => {
  const path = req.route.path === '/beautyabout' ? 'BeautyAbout' : 'CakeAbout';

  const data = DUMMY_DATA[0][path];

  res.status(200).json(data);
};

const updateAbout = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(new HttpError('Please check input data and try again'));
  }
  const path = req.route.path === '/beautyabout' ? 'BeautyAbout' : 'CakeAbout';

  const { text } = req.body;
  const updatedAbout = { ...DUMMY_DATA[0][path] };
  updatedAbout.text = text;

  DUMMY_DATA[0][path] = updatedAbout;

  res.status(200).json({ Message: 'Updated About' });
};

exports.getData = getData;
exports.updateAbout = updateAbout;
