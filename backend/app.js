const express = require('express');
const bodyParser = require('body-parser');

const HttpError = require('./models/http-error');

const dataRoutes = require('./routes/data-routes');
const userRoutes = require('./routes/user-routes');

const app = express();
app.use(bodyParser.json());

app.use('/api', dataRoutes);
app.use('/users', userRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could Not Find Route', 404);
  return next(error);
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }

  res
    .status(error.code || 500)
    .json(error.message || 'An unknown error has occured');
});

app.listen(5000, () => console.log('connected to server'));
