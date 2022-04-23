import React, { useMemo } from 'react';
import { Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import PropTypes from 'prop-types';

import './lib/lib-styles.css';

const Slider = ({ children, autoplayDelay }) => {
  const sliderProps = useMemo(
    () => ({
      autoplay: {
        delay: autoplayDelay,
      },
      navigation: true,
      modules: [Navigation, Autoplay],
    }),
    [autoplayDelay]
  );

  return (
    <Swiper {...sliderProps} className="mySwiper">
      {children}
    </Swiper>
  );
};

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  autoplayDelay: PropTypes.number,
};

Slider.defaultProps = {
  autoplayDelay: 3000,
};

export default React.memo(Slider);
