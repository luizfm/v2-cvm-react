import React, { useMemo } from 'react';
import AriaModal from 'react-aria-modal';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.css';

const Modal = ({
  id,
  onExit,
  title,
  className,
  wrapperClassName,
  fullScreen,
  children,
}) => {
  const ariaModalStyles = useMemo(
    () => (fullScreen ? styles['full-screen'] : ''),
    [fullScreen]
  );

  return (
    <AriaModal
      initialFocus={`#${id}`}
      onExit={onExit}
      titleText={title}
      className={classnames(styles.modal, className)}
      dialogClass={ariaModalStyles}
    >
      <div
        className={classnames(styles['modal-wrapper'], wrapperClassName)}
        id={id}
      >
        {children}
      </div>
    </AriaModal>
  );
};

Modal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onExit: PropTypes.func,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullScreen: PropTypes.bool,
};

Modal.defaultProps = {
  onExit: () => {},
  className: '',
  wrapperClassName: '',
  fullScreen: false,
};

export default React.memo(Modal);
