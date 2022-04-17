import React from 'react';
import PropTypes from 'prop-types';

import PrismicRichText from '_components/prismic-rich-text';
import { prismicRichTextPropTypes } from '_utils/proptypes';

import styles from './styles.css';

const GoalsTable = ({ specific, general }) => (
  <table className={styles.table}>
    <thead>
      <tr className={styles['table-head-wrapper']}>
        <th className={styles['head-cell']}>Gerais</th>
        <th className={styles['head-cell']}>Específicos</th>
      </tr>
    </thead>
    <tbody>
      <tr className={styles['table-body-wrapper']}>
        <td className={styles['body-cell']}>
          <PrismicRichText content={general} />
        </td>
        <td className={styles['body-cell']}>
          <PrismicRichText content={specific} />
        </td>
      </tr>
    </tbody>
  </table>
);

GoalsTable.propTypes = {
  specific: PropTypes.arrayOf(prismicRichTextPropTypes).isRequired,
  general: PropTypes.arrayOf(prismicRichTextPropTypes).isRequired,
};

export default React.memo(GoalsTable);
