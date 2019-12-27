import React from 'react';

import './Testimonials.css';

const Tesimonial = props => {
  const testimonial = props.displayItems.map(item => {
    if (item.show) {
      return (
        <div key={item.id} className="testimonial__text">
          {item.text}
        </div>
      );
    }
    return null;
  });

  return <React.Fragment>{testimonial}</React.Fragment>;
};

export default Tesimonial;
