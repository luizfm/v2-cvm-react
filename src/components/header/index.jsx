import React from 'react';
import { Link } from 'react-router-dom';

import { headerItemsProps } from '_utils/proptypes';

import styles from './styles.css';

const Header = ({ navItems }) => (
  <header className={styles['header-container']}>
    <nav>
      {navItems.map((navItem) => (
        <Link key={navItem.label} to={navItem.link}>
          {navItem.label}
        </Link>
      ))}
    </nav>
  </header>
);

Header.propTypes = {
  navItems: headerItemsProps.isRequired,
};

export default React.memo(Header);
