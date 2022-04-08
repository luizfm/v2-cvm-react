import React, { useMemo } from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.css';

const LottieAnimation = ({ lottieFile, height, width, className }) => {
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

  return (
    <div className={classnames(styles['lottie-container'], className)}>
      <Lottie options={defaultOptions} height={height} width={width} />
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
  height: 400,
  width: 400,
  className: '',
};

export default React.memo(LottieAnimation);
