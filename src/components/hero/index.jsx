import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ slice }) => (
  <section>
    <img src={slice.backgroundImage.url} alt="Helper glyer" />
  </section>
);

Hero.propTypes = {
  slice: PropTypes.shape({}).isRequired,
};

export default Hero;
