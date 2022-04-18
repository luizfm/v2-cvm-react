import React from 'react';
import { SwiperSlide } from 'swiper/react';

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
    <Slider>
      {slice.items.map((item) => (
        <SwiperSlide key={item}>
          <img src={item} className={styles.image} alt="" />
        </SwiperSlide>
      ))}
    </Slider>
  </section>
);

Hero.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default Hero;
