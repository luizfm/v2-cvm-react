import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import PropTypes from 'prop-types';

import './lib/lib-styles.css';
import styles from './styles.css';

const Slider = ({ items }) => (
  <Swiper
    navigation
    autoplay={{ delay: 3000 }}
    modules={[Navigation, Autoplay]}
    className="mySwiper"
  >
    {items.map((item) => (
      <SwiperSlide key={item}>
        <img className={styles.image} src={item} alt="" />
      </SwiperSlide>
    ))}
  </Swiper>
);

Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default React.memo(Slider);
