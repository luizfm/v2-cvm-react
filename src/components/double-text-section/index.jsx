import React from 'react';

import { prismicSlicePropTypes } from '_utils/proptypes';

import PrismicRichText from '_components/prismic-rich-text';

import styles from './styles.css';

const DoubleTextSection = ({ slice }) => (
  <section className={styles['double-text-section-container']}>
    <div className={styles['double-text-section-wrapper']}>
      <PrismicRichText content={slice.firstText} />
      <PrismicRichText
        className={styles['second-text']}
        content={slice.secondText}
      />
    </div>
  </section>
);

DoubleTextSection.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(DoubleTextSection);
