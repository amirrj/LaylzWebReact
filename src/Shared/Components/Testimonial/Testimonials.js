import React from 'react';

import Testimonial from './Testimonial';
import Button from '../../UIElements/Button/Button';
import './Testimonials.css';

const Testimonials = props => {
  const displayItems = props.testimonials;

  const changeActiveTestimonialHandler = id => {
    props.changeActiveTestimonialHandler(id);
  };

  return (
    <section className="testimonial">
      <Testimonial displayItems={displayItems} />
      <Button
        changeActiveHandler={changeActiveTestimonialHandler}
        className={'button-box--testimonial'}
        displayItems={displayItems}
      />
    </section>
  );
};

export default Testimonials;
