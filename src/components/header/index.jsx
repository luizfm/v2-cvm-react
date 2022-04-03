import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

import useWindowScroll from '_hooks/use-window-scroll';
import useToggle from '_hooks/use-toggle';
import useWindowSize from '_hooks/use-window-size';
import CvmLogo from '_assets/images/cvm-logo.png';
import IconButton from '_components/icon-button';
import MenuIcon from '_assets/icons/menu-icon.svg';
import { itemsProps } from '_utils/proptypes';
import HeaderMenuModal from '_components/header/header-menu-modal';

import styles from './styles.css';

const Header = ({ navItems }) => {
  const scroll = useWindowScroll();
  const { isMedium, isMobile } = useWindowSize();
  const [isMenuOpen, onToggleMenu] = useToggle();

  const hasScrolled = useMemo(() => scroll !== 0, [scroll]);

  return (
    <header
      className={classnames(styles['header-container'], {
        [styles.fixed]: hasScrolled,
      })}
    >
      <div className={styles['nav-wrapper']}>
        <img
          className={styles['cvm-logo']}
          src={CvmLogo}
          alt="Hand holding a world"
        />
        {isMedium || isMobile ? (
          <IconButton
            icon={MenuIcon}
            onClick={onToggleMenu}
            className={styles['menu-button']}
          />
        ) : (
          <nav className={styles['nav-container']}>
            {navItems.map((navItem) => (
              <Link
                className={styles['nav-item']}
                key={navItem.label}
                to={navItem.link}
              >
                {navItem.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
      {isMenuOpen && (
        <HeaderMenuModal navItems={navItems} onExit={onToggleMenu} />
      )}
    </header>
  );
};

Header.propTypes = {
  navItems: itemsProps.isRequired,
};

export default React.memo(Header);
