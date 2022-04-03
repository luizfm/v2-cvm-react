import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { svgPropTypes } from '_utils/proptypes';

import styles from './styles.css';

const Svg = ({ icon, className }) => (
  <svg
    className={classnames(styles.icon, className)}
    viewBox={icon.viewBox}
    aria-hidden="true"
  >
    <use xlinkHref={`#${icon.id}`} />
  </svg>
);

Svg.propTypes = {
  icon: svgPropTypes.isRequired,
  className: PropTypes.string,
};

Svg.defaultProps = {
  className: '',
};

export default React.memo(Svg);
