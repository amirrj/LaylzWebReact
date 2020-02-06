const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');

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

const getData = (req, res, next) => {
  const path = req.route.path === '/beautyhome' ? 'BeautyHome' : 'CakeHome';
  const data = DUMMY_DATA[0][path];

  if (!data) {
    return next(new HttpError('Data Not Found', 404));
  }

  res.json(data);
};

const addImage = (req, res, next) => {
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
    req.route.path === '/beautyhome/slideshow' ? 'BeautyHome' : 'CakeHome';

  const { id, image, show } = req.body;

  const newImage = {
    id,
    image,
    show
  };

  DUMMY_DATA[0][path].SlideShowImages.push(newImage);

  res.json(newImage);
};

const addTestimonial = (req, res, next) => {
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
    req.route.path === '/beautyhome/testimonial' ? 'BeautyHome' : 'CakeHome';

  const { id, author, text, show } = req.body;

  const newTestimonial = {
    id,
    author,
    text,
    show
  };

  DUMMY_DATA[0][path].Testimonials.push(newTestimonial);

  res.status(200).json(newTestimonial);
};

const deleteImage = (req, res, next) => {
  const path =
    req.route.path === '/beautyhome/slideshow/:id' ? 'BeautyHome' : 'CakeHome';

  const id = req.params.id;

  DUMMY_DATA[0][path].SlideShowImages = DUMMY_DATA[0][
    path
  ].SlideShowImages.filter(i => id !== i.id);

  res.status(200).json({ Message: 'Item Deleted' });
};

const deleteTestimonial = (req, res, next) => {
  const path =
    req.route.path === '/beautyhome/testimonial/:id'
      ? 'BeautyHome'
      : 'CakeHome';

  const id = req.params.id;
  DUMMY_DATA[0][path].Testimonials = DUMMY_DATA[0][path].Testimonials.filter(
    i => id !== i.id
  );

  res.status(200).json({ Message: 'Item Deleted' });
};

exports.getData = getData;
exports.addImage = addImage;
exports.addTestimonial = addTestimonial;
exports.deleteImage = deleteImage;
exports.deleteTestimonial = deleteTestimonial;
