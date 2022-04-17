import React from 'react';
import PropTypes from 'prop-types';

import PrismicRichText from '_components/prismic-rich-text';

import styles from './styles.css';

export const IdentityItemVariant = {
  TEXT: 'text',
  LIST: 'list',
};

const IdentityItem = ({ subtitle, content, variant, className }) => (
  <div className={styles['identity-item-container']}>
    <h2 className={styles.subtitle}>{subtitle}</h2>
    {variant === IdentityItemVariant.TEXT ? (
      <p>{content}</p>
    ) : (
      <ul className={styles.list}>
        {content.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

IdentityItem.propTypes = {
  subtitle: PropTypes.string.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOfType(Object.values(IdentityItemVariant)),
  content: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

IdentityItem.defaultProps = {
  className: '',
  variant: IdentityItemVariant.TEXT,
};

export default React.memo(IdentityItem);
