import React from 'react';

import { prismicSlicePropTypes } from '_utils/proptypes';
import Slider from '_components/slider';

import styles from './styles.css';

const Hero = ({ slice }) => {
  console.log(slice);

  return (
  // <section
  //   className={styles['hero-section-container']}
  //   style={{
  //     backgroundImage: `url(${slice.backgroundImage.url})`,
  //   }}
  // >

    // </section>
    <Slider items={slice.items} />
  );
};

Hero.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default Hero;
