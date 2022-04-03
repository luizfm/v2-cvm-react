import React, { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { headerItemsProps } from '_utils/proptypes';
import Modal from '_components/modal';
import CloseIcon from '_assets/icons/close-icon.svg';
import IconButton from '_components/icon-button';

import styles from './styles.css';

const HeaderMenuModal = ({ navItems, onExit }) => (
  <Modal
    id="header-menu-modal"
    title="Menu modal"
    fullScreen
    wrapperClassName={styles['header-menu-modal-container']}
  >
    <IconButton
      className={styles['close-button']}
      iconClassName={styles['close-icon']}
      icon={CloseIcon}
      onClick={onExit}
    />
    <nav className={styles['nav-container']}>
      {navItems.map((navItem) => (
        <div key={navItem.label} className={styles['nav-item-wrapper']}>
          <Link to="/" className={styles['nav-link']}>
            {navItem.label}
          </Link>
        </div>
      ))}
    </nav>
  </Modal>
);

HeaderMenuModal.propTypes = {
  navItems: headerItemsProps.isRequired,
  onExit: PropTypes.func,
};

HeaderMenuModal.defaultProps = {
  onExit: () => {},
};

export default React.memo(HeaderMenuModal);
