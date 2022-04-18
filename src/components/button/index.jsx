import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Svg from '_components/svg';
import { svgPropTypes } from '_utils/proptypes';

import styles from './styles.css';

export const ButtonTheme = {
  GRAY: 'gray',
  LIGHT_GREEN: 'lightGreen',
  YELLOW: 'yellow',
  PINK_WHITE: 'pink-white',
  TRANSPARENT: 'transparent',
};

const Button = ({
  children,
  link,
  theme,
  externalUrl,
  startAdornment,
  endAdornment,
  onClick,
  className,
  adornmentClassName,
  ...restProps
}) => {
  if (link) {
    return externalUrl ? (
      <a
        className={classnames(styles.button, styles[theme], className)}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        {...restProps}
      >
        {children}
      </a>
    ) : (
      <Link
        className={classnames(styles.button, styles[theme], className)}
        to={link}
        {...restProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      className={classnames(styles.button, styles[theme], className)}
      type="button"
      onClick={onClick}
      {...restProps}
    >
      {startAdornment && (
        <Svg
          className={classnames(styles.adornment, adornmentClassName)}
          icon={startAdornment}
        />
      )}
      {children}
      {endAdornment && (
        <Svg
          className={classnames(styles.adornment, adornmentClassName)}
          icon={endAdornment}
        />
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string,
  theme: PropTypes.oneOf(Object.values(ButtonTheme)),
  externalUrl: PropTypes.bool,
  startAdornment: svgPropTypes,
  endAdornment: svgPropTypes,
  onClick: PropTypes.func,
  className: PropTypes.string,
  adornmentClassName: PropTypes.string,
};

Button.defaultProps = {
  link: '',
  externalUrl: false,
  startAdornment: null,
  endAdornment: null,
  onClick: () => {},
  theme: ButtonTheme.GRAY,
  className: '',
  adornmentClassName: '',
};
export default Button;
