const express = require('express');
const { check } = require('express-validator');

const dbController = require('../controllers/fullDataBase-controller');
const homeController = require('../controllers/home-controller');
const serviceController = require('../controllers/services-controller');
const aboutController = require('../controllers/about-controller');
const workController = require('../controllers/work-controller');

const router = express.Router();

router.get('/', dbController.getData);

// beauty home routes
router.get('/beautyhome', homeController.getData);
router.post('/beautyhome', homeController.createHome);
router.post(
  '/beautyhome/slideshow',
  [
    check('image')
      .not()
      .isEmpty()
  ],
  homeController.addImage
);
router.post(
  '/beautyhome/testimonial',
  [
    check('author')
      .not()
      .isEmpty(),
    check('text')
      .not()
      .isEmpty()
  ],
  homeController.addTestimonial
);
router.delete('/beautyhome/slideshow/:id', homeController.deleteImage);
router.delete('/beautyhome/testimonial/:id', homeController.deleteTestimonial);

// cake home routes
router.get('/cakehome', homeController.getData);
router.post('/cakehome', homeController.createHome);
router.post(
  '/cakehome/slideshow',
  [
    check('image')
      .not()
      .isEmpty()
  ],
  homeController.addImage
);
router.post(
  '/cakehome/testimonial',
  [
    check('author')
      .not()
      .isEmpty(),
    check('text')
      .not()
      .isEmpty()
  ],
  homeController.addTestimonial
);
router.delete('/cakehome/slideshow/:id', homeController.deleteImage);
router.delete('/cakehome/testimonial/:id', homeController.deleteTestimonial);

//beauty about
router.get('/beautyabout', aboutController.getData);
router.post('/beautyabout', aboutController.createAbout);
router.patch(
  '/beautyabout',
  [
    check('text')
      .not()
      .isEmpty()
  ],
  aboutController.updateAbout
);

//cake about
router.get('/cakeabout', aboutController.getData);
router.post('/cakeabout', aboutController.createAbout);
router.patch(
  '/cakeabout',
  [
    check('text')
      .not()
      .isEmpty()
  ],
  aboutController.updateAbout
);

// beauty services
router.get('/beautyservices', serviceController.getData);
router.post(
  '/beautyservices',
  [
    check('service')
      .not()
      .isEmpty(),
    check('img')
      .not()
      .isEmpty(),
    check('detail')
      .not()
      .isEmpty(),
    check('price')
      .not()
      .isEmpty()
  ],
  serviceController.createService
);
router.patch(
  '/beautyservices/:id',
  [
    check('service')
      .not()
      .isEmpty(),
    check('img')
      .not()
      .isEmpty(),
    check('detail')
      .not()
      .isEmpty(),
    check('price')
      .not()
      .isEmpty()
  ],
  serviceController.updateService
);
router.delete('/beautyservices/:id', serviceController.deleteService);

//cake services
router.get('/cakeservices', serviceController.getData);
router.post(
  '/cakeservices',
  [
    check('service')
      .not()
      .isEmpty(),
    check('img')
      .not()
      .isEmpty(),
    check('detail')
      .not()
      .isEmpty(),
    check('price')
      .not()
      .isEmpty()
  ],
  serviceController.createService
);
router.patch(
  '/cakeservices/:id',
  [
    check('service')
      .not()
      .isEmpty(),
    check('img')
      .not()
      .isEmpty(),
    check('detail')
      .not()
      .isEmpty(),
    check('price')
      .not()
      .isEmpty()
  ],
  serviceController.updateService
);
router.delete('/cakeservices/:id', serviceController.deleteService);

//beautywork
router.get('/beautywork', workController.getData);
router.post(
  '/beautywork',
  [
    check('title')
      .not()
      .isEmpty(),
    check('text')
      .not()
      .isEmpty(),
    check('description')
      .not()
      .isEmpty(),
    check('date')
      .not()
      .isEmpty(),
    check('thumbnail')
      .not()
      .isEmpty(),
    check('images')
      .not()
      .isEmpty()
  ],
  workController.addWork
);
router.delete('/beautywork/:id', workController.deleteWork);
router.patch(
  '/beautywork/:id',
  [
    check('title')
      .not()
      .isEmpty(),
    check('text')
      .not()
      .isEmpty(),
    check('description')
      .not()
      .isEmpty(),
    check('date')
      .not()
      .isEmpty(),
    check('thumbnail')
      .not()
      .isEmpty(),
    check('images')
      .not()
      .isEmpty()
  ],
  workController.updateWork
);

//cakework
router.get('/cakework', workController.getData);
router.post(
  '/cakework',
  [
    check('title')
      .not()
      .isEmpty(),
    check('text')
      .not()
      .isEmpty(),
    check('description')
      .not()
      .isEmpty(),
    check('date')
      .not()
      .isEmpty(),
    check('thumbnail')
      .not()
      .isEmpty(),
    check('images')
      .not()
      .isEmpty()
  ],
  workController.addWork
);
router.delete('/cakework/:id', workController.deleteWork);
router.patch(
  '/cakework/:id',
  [
    check('title')
      .not()
      .isEmpty(),
    check('text')
      .not()
      .isEmpty(),
    check('description')
      .not()
      .isEmpty(),
    check('date')
      .not()
      .isEmpty(),
    check('thumbnail')
      .not()
      .isEmpty(),
    check('images')
      .not()
      .isEmpty()
  ],
  workController.updateWork
);

module.exports = router;
