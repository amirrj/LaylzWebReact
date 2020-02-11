const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

const { beautyHome, cakeHome } = require('../models/home-model');

const DUMMY_DATA = [
  {
    BeautyHome: {
      SlideShowImages: [
        {
          id: 'bi1',
          image: 'http://localhost:3000/images/slideshowBeauty-img1.jpg',
          show: false
        },
        {
          id: 'bi2',
          image: 'http://localhost:3000/images/slideshowBeauty-img2.jpg',
          show: false
        },
        {
          id: 'bi3',
          image: 'http://localhost:3000/images/slideshowBeauty-img3.jpg',
          show: false
        },
        {
          id: 'bi4',
          image: 'http://localhost:3000/images/slideshowBeauty-img4.jpg',
          show: false
        }
      ],
      Testimonials: [
        {
          id: 'bt1',
          author: 'Person1',
          text: 'Lorem ipsum dolor sit amet.',
          show: false
        },
        {
          id: 'bt2',
          author: 'Person2',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Expedita, quos',
          show: false
        },
        {
          id: 'bt3',
          author: 'Person3',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Expedita, quos',
          show: false
        }
      ]
    },
    CakeHome: {
      SlideShowImages: [
        {
          id: 'ci1',
          image: 'http://localhost:3000/images/slideshowCake-img1.jpg',
          show: true
        },
        {
          id: 'ci2',
          image: 'http://localhost:3000/images/slideshowCake-img2.jpg',
          show: false
        },
        {
          id: 'ci3',
          image: 'http://localhost:3000/images/slideshowCake-img3.jpg',
          show: false
        },
        {
          id: 'ci4',
          image: 'http://localhost:3000/images/slideshowCake-img4.jpg',
          show: false
        }
      ],
      Testimonials: [
        {
          id: 'ct1',
          author: 'Person1',
          text: 'Lorem ipsum dolor sit amet.',
          show: true
        },
        {
          id: 'ct2',
          author: 'Person2',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Expedita, quos',
          show: false
        },
        {
          id: 'ct3',
          author: 'Person3',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Expedita, quos',
          show: false
        }
      ]
    }
  }
];

const getData = async (req, res, next) => {
  const path = req.route.path === '/beautyhome' ? beautyHome : cakeHome;

  const data = await path.find().exec();

  res.json(data);
};

const createHome = async (req, res, next) => {
  const path = req.route.path === '/beautyhome' ? beautyHome : cakeHome;

  const { slideShowImages, testimonials } = req.body;

  const createdHome = new path({
    slideShowImages,
    testimonials
  });

  await createdHome.save();

  res.status(201).json({ Message: 'Home created' });
};

const addImage = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(
      new HttpError(
        'Incorrect data fields entered, please check and try again'
      ),
      422
    );
  }
  const path =
    req.route.path === '/beautyhome/slideshow' ? beautyHome : cakeHome;

  const { image, show } = req.body;
  let data;

  try {
    data = await path.findOne();
  } catch (err) {
    const error = new HttpError(
      'Could not find data, please check and try again',
      404
    );
    return next(error);
  }

  const slideShowImages = [...data.slideShowImages];
  const newImage = data.slideShowImages.create({
    image,
    show
  });
  slideShowImages.push(newImage);
  data.slideShowImages = slideShowImages;

  try {
    data.save();
  } catch (err) {
    const error = new HttpError(
      'Could not save data, please check and try again',
      500
    );
    return next(error);
  }

  res.status(200).json({ Message: 'Image Updated' });
};

const addTestimonial = async (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return next(
      new HttpError(
        'Incorrect data fields entered, please check and try again'
      ),
      422
    );
  }
  const path =
    req.route.path === '/beautyhome/testimonial' ? beautyHome : cakeHome;

  const { author, text, show } = req.body;
  let data;

  try {
    data = await path.findOne();
  } catch (err) {
    const error = new HttpError(
      'Could not find data, please check and try again',
      404
    );
    return next(error);
  }

  const newTestimonial = data.testimonials.create({
    author,
    text,
    show
  });
  const newTestimonials = [...data.testimonials];
  newTestimonials.push(newTestimonial);
  data.testimonials = newTestimonials;

  try {
    data.save();
  } catch (err) {
    const error = new HttpError(
      'Could not save data, please check and try again',
      500
    );
    return error;
  }

  res.status(200).json({ Message: 'New testimonial added' });
};

const deleteImage = async (req, res, next) => {
  const path =
    req.route.path === '/beautyhome/slideshow/:id' ? beautyHome : cakeHome;

  const id = req.params.id;
  let data;

  try {
    data = await path.findOne();
  } catch (err) {
    const error = new HttpError(
      'Could not find data, please check and try again',
      404
    );
    return next(error);
  }

  const imageID = data.slideShowImages.find(i => i.id === id);
  if (!imageID) {
    const error = new HttpError(
      'Could not find data with that ID, please check and try again',
      404
    );
    return next(error);
  }

  const updatedSlideShowImages = data.slideShowImages.filter(i => i.id !== id);
  data.slideShowImages = updatedSlideShowImages;

  try {
    data.save();
  } catch (err) {
    const error = new HttpError(
      'Could not delete data, please check and try again',
      500
    );
    return next(error);
  }

  res.status(200).json({ Message: 'Item Deleted' });
};

const deleteTestimonial = async (req, res, next) => {
  const path =
    req.route.path === '/beautyhome/testimonial/:id' ? beautyHome : cakeHome;

  const id = req.params.id;
  let data;

  try {
    data = await path.findOne();
  } catch (err) {
    const error = new HttpError(
      'Could not find data, please check and try again',
      404
    );
    return next(error);
  }

  const testimonialID = data.testimonials.find(t => t.id === id);
  if (!testimonialID) {
    const error = new HttpError(
      'Could not find data with that ID, please check and try again',
      404
    );
    return next(error);
  }

  const newTestimonials = data.testimonials.filter(t => t.id !== id);
  data.testimonials = newTestimonials;

  try {
    data.save();
  } catch (err) {
    const error = new HttpError(
      'Could not save data, please check and try again',
      500
    );
    return next(error);
  }

  res.status(200).json({ Message: 'Item Deleted' });
};

exports.getData = getData;
exports.createHome = createHome;
exports.addImage = addImage;
exports.addTestimonial = addTestimonial;
exports.deleteImage = deleteImage;
exports.deleteTestimonial = deleteTestimonial;
