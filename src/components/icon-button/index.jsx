import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Svg from '_components/svg';
import { svgPropTypes } from '_utils/proptypes';

import styles from './styles.css';

const IconButton = ({
  icon,
  onClick,
  link,
  externalUrl,
  className,
  iconClassName,
}) => {
  if (link) {
    return externalUrl ? (
      <a
        className={classnames(styles['icon-button'], className)}
        href={link}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Svg icon={icon} className={iconClassName} />
      </a>
    ) : (
      <Link to={link} className={classnames(styles['icon-button'], className)}>
        <Svg icon={icon} className={iconClassName} />
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={classnames(styles['icon-button'], className)}
    >
      <Svg icon={icon} className={iconClassName} />
    </button>
  );
};

IconButton.propTypes = {
  icon: svgPropTypes.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  link: PropTypes.string,
  externalUrl: PropTypes.bool,
};

IconButton.defaultProps = {
  onClick: () => {},
  className: '',
  iconClassName: '',
  link: '',
  externalUrl: false,
};

export default IconButton;
