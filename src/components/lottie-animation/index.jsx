import React, { useMemo } from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import useWindowSize from '_hooks/use-window-size';

import styles from './styles.css';

const LottieAnimation = ({ lottieFile, height, width, className }) => {
  const { isMobile } = useWindowSize();

  const defaultOptions = useMemo(
    () => ({
      loop: true,
      autoplay: true,
      animationData: lottieFile,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }),
    [lottieFile]
  );

  const { lottieHeight, lottieWidth } = useMemo(() => {
    if (height && width) {
      return {
        lottieHeight: height,
        lottieWidth: width,
      };
    }

    return isMobile
      ? { lottieHeight: 280, lottieWidth: 280 }
      : { lottieHeight: 400, lottieWidth: 400 };
  }, [height, isMobile, width]);

  return (
    <div className={classnames(styles['lottie-container'], className)}>
      <Lottie
        options={defaultOptions}
        height={lottieHeight}
        width={lottieWidth}
      />
    </div>
  );
};

LottieAnimation.propTypes = {
  lottieFile: PropTypes.shape({}).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  className: PropTypes.string,
};

LottieAnimation.defaultProps = {
  height: null,
  width: null,
  className: '',
};

export default React.memo(LottieAnimation);
