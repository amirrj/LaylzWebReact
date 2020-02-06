const HttpError = require('../models/http-error');

const DUMMY_USER = [
  {
    id: 'u1',
    name: 'amir javed',
    email: 'amir.javed@hotmail.co.uk',
    password: 'testers'
  }
];

const login = (req, res, next) => {
  const { email, password } = req.body;

  const indentifiedUser = DUMMY_USER.find(e => e.email === email);
  if (!indentifiedUser || indentifiedUser.password !== password) {
    return next(new HttpError('Wrong user credientials', 401));
  }

  res.json({ Message: 'Logged In' });
};

exports.login = login;
