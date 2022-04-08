import React from 'react';

import { prismicSlicePropTypes } from '_utils/proptypes';
import Slider from '_components/slider';

import styles from './styles.css';

const Hero = ({ slice }) => (
  <section
    className={styles['hero-section-container']}
    style={{
      backgroundImage: `url(${slice.backgroundImage.url})`,
    }}
  >
    <Slider items={slice.items} />
  </section>
);

Hero.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default Hero;
