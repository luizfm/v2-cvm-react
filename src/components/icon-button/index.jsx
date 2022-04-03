import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Svg from '_components/svg';
import { svgPropTypes } from '_utils/proptypes';

import styles from './styles.css';

const IconButton = ({ icon, onClick, className, iconClassName }) => (
  <button
    type="button"
    onClick={onClick}
    className={classnames(styles['icon-button'], className)}
  >
    <Svg icon={icon} className={iconClassName} />
  </button>
);

IconButton.propTypes = {
  icon: svgPropTypes.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
};

IconButton.defaultProps = {
  onClick: () => {},
  className: '',
  iconClassName: '',
};

export default IconButton;
