import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

import { prismicRichTextPropTypes } from '_utils/proptypes';

import styles from './styles.css';

const PrismicRichText = ({ content }) => (
  <div className={styles['prismic-text-container']}>
    <RichText render={content} />
  </div>
);

PrismicRichText.propTypes = {
  content: PropTypes.arrayOf(prismicRichTextPropTypes).isRequired,
};

export default React.memo(PrismicRichText);
