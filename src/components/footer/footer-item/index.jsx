import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { itemsProps } from '_utils/proptypes';

import styles from './styles.css';

const FooterItem = ({ sectionName, navItems, className }) => (
  <section className={classnames(styles['footer-item-container'], className)}>
    <h1 className={styles['footer-item-title']}>{sectionName}</h1>
    <div className={styles['footer-items']}>
      {navItems?.map((navItem) =>
        navItem.link ? (
          <Link
            className={classnames(styles['nav-item'], styles.link)}
            key={navItem.label}
            to={navItem.link}
          >
            {navItem.label}
          </Link>
        ) : (
          <span className={styles['nav-item']}>{navItem.label}</span>
        )
      )}
    </div>
  </section>
);

FooterItem.propTypes = {
  sectionName: PropTypes.string.isRequired,
  navItems: itemsProps.isRequired,
  className: PropTypes.string,
};

FooterItem.defaultProps = {
  className: '',
};

export default React.memo(FooterItem);
