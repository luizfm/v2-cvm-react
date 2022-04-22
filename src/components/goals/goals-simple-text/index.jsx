import React from 'react';
import PropTypes from 'prop-types';

import PrismicRichText from '_components/prismic-rich-text';
import { prismicRichTextPropTypes } from '_utils/proptypes';

import styles from './styles.css';

const GoalsSimpleText = ({ specific, general }) => (
  <div className={styles['goals-simple-text-container']}>
    <h2>Geral</h2>
    <PrismicRichText content={general} />
    <h2 className={styles['specific-goals']}>Específicos</h2>
    <PrismicRichText content={specific} />
  </div>
);

GoalsSimpleText.propTypes = {
  specific: PropTypes.arrayOf(prismicRichTextPropTypes).isRequired,
  general: PropTypes.arrayOf(prismicRichTextPropTypes).isRequired,
};

export default React.memo(GoalsSimpleText);
