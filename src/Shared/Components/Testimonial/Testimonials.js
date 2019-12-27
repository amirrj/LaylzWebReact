import React from 'react';

import Testimonial from './Testimonial';
import Button from '../../UIElements/Button/Button';
import './Testimonials.css';

class Testimonials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      BeautyTestimonials: [
        {
          id: 'BT1',
          author: 'Person1',
          text: 'Lorem ipsum dolor sit amet.',
          show: true
        },
        {
          id: 'BT2',
          author: 'Person2',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Expedita, quos',
          show: false
        },
        {
          id: 'BT3',
          author: 'Person3',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Expedita, quos',
          show: false
        }
      ],
      CakeTestimonials: [
        {
          id: 'CT1',
          author: 'Person1',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Expedita, quos',
          show: true
        },
        {
          id: 'CT2',
          author: 'Person2',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Expedita, quos',
          show: false
        },
        {
          id: 'CT3',
          author: 'Person3',
          text:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit.Expedita, quos',
          show: false
        }
      ]
    };
  }

  changeActiveTestimonialHandler = id => {
    const displayItem =
      this.props.type === 'beauty'
        ? this.state.BeautyTestimonials.filter(item => id === item.id)
        : this.state.CakeTestimonials.filter(item => id === item.id);
    displayItem[0].show = true;
    const notDisplayItem =
      this.props.type === 'beauty'
        ? this.state.BeautyTestimonials.filter(item => id !== item.id)
        : this.state.CakeTestimonials.filter(item => id !== item.id);
    notDisplayItem.map(item => {
      item.show = false;
      return null;
    });
    const BeautyTestimonials = this.state.BeautyTestimonials;
    const CakeTestimonials = this.state.CakeTestimonials;
    this.setState({
      BeautyTestimonials,
      CakeTestimonials
    });
  };

  render() {
    const displayItems =
      this.props.type === 'beauty'
        ? this.state.BeautyTestimonials
        : this.state.CakeTestimonials;

    return (
      <section className="testimonial">
        <Testimonial displayItems={displayItems} />
        <Button
          changeActiveHandler={this.changeActiveTestimonialHandler}
          className={'button-box--testimonial'}
          displayItems={displayItems}
        />
      </section>
    );
  }
}

export default Testimonials;
