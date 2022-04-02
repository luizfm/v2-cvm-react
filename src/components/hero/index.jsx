import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

const Hero = ({ slice }) => (
  <section>
    <img
      className={styles['hero-image']}
      src={slice.backgroundImage.url}
      alt="Helper glyer"
    />
  </section>
);

Hero.propTypes = {
  slice: PropTypes.shape({}).isRequired,
};

export default Hero;
