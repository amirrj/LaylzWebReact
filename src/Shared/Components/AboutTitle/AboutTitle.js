import React from 'react';

import './AboutTitle.css';

class AboutTitle extends React.Component {
  title = this.props.type === 'beauty' ? 'LaylzBeauty' : 'LaylzCakes';

  render() {
    return (
      <section className="about__heading">
        <div className="about__border"></div>
        <h1 className="about__title">
          The <br></br> {this.title} <br></br> Story
        </h1>
        <div className="about__border"></div>
      </section>
    );
  }
}

export default AboutTitle;
