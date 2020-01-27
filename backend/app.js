const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const HomeRoutes = require('./Routes/Home');
const ServiceRoutes = require('./Routes/Service');
const AboutRoutes = require('./Routes/About');
const WorkRoutes = require('./Routes/Work.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect(
    'mongodb+srv://AmirJ:Heskey14@cluster0-xd4ro.mongodb.net/LaylzDB?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => {
    console.log('connected to DB');
  })
  .catch(err => {
    console.log(err);
  });

const apiRoute = '/api';

// all data
app.get(`${apiRoute}/api`);

// Home Routes
app.post(`${apiRoute}/beautyhome`, HomeRoutes.updateHome);
app.get(`${apiRoute}/beautyhome`, HomeRoutes.getHome);
app.post(`${apiRoute}/cakehome`, HomeRoutes.updateHome);
app.get(`${apiRoute}/cakehome`, HomeRoutes.getHome);

// About routes
app.post(`${apiRoute}/beautyabout`, AboutRoutes.updateText);
app.get(`${apiRoute}/beautyabout`, AboutRoutes.getAbout);
app.post(`${apiRoute}/cakeabout`, AboutRoutes.updateText);
app.get(`${apiRoute}/cakeabout`, AboutRoutes.getAbout);

// services routes
app.post(`${apiRoute}/cakeservices`, ServiceRoutes.createService);
app.get(`${apiRoute}/cakeservices`, ServiceRoutes.getService);
app.post(`${apiRoute}/beautyservices`, ServiceRoutes.createService);
app.get(`${apiRoute}/beautyservices`, ServiceRoutes.getService);

//work routes
app.post(`${apiRoute}/beautywork`, WorkRoutes.createWork);
app.get(`${apiRoute}/beautywork`, WorkRoutes.getWork);
app.get(`${apiRoute}/beautywork/:id`, WorkRoutes.getWorkById);
app.post(`${apiRoute}/cakework`, WorkRoutes.createWork);
app.get(`${apiRoute}/cakework`, WorkRoutes.getWork);
app.get(`${apiRoute}/cakework/:id`, WorkRoutes.getWorkById);

app.listen(5000);
