import React from 'react';
import { useSelector } from 'react-redux';

import { prismicFooterSelector } from '_modules/prismic/selectors';
import FooterItem from '_components/footer/footer-item';

import styles from './styles.css';

const Footer = () => {
  const footerItems = useSelector(prismicFooterSelector);

  return (
    <footer className={styles['footer-container']}>
      <div className={styles['footer-wrapper']}>
        <div className={styles['footer-items-container']}>
          {footerItems?.map((footerItem) => (
            <FooterItem
              className={styles['footer-item']}
              key={footerItem?.sectionName}
              sectionName={footerItem?.sectionName}
              navItems={footerItem?.items}
            />
          ))}
        </div>
        <p className={styles.copyright}>
          Copyright © 2021 - CVM - Todos os direitos reservados - Desenvolvido
          por estudantes da IESGF
        </p>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
