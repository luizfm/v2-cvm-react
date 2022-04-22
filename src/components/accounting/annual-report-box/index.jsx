import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Button from '_components/button';
import { itemsProps } from '_utils/proptypes';
import PdfIcon from '_assets/icons/pdf-icon.svg';

import styles from './styles.css';

const AnnualReportBox = ({ balanceReports, className }) => (
  <div className={classnames(styles['annual-report-box-container'], className)}>
    <h3 className={styles['box-title']}>Prestação de contas</h3>
    <h4 className={styles['box-subtitle']}>
      Relatório anual e balanço patrimonial
    </h4>
    <div className={styles['buttons-container']}>
      {balanceReports.map((report) => (
        <Button
          endAdornment={PdfIcon}
          key={report.year}
          externalUrl
          link={report.link}
          className={styles['report-button']}
        >
          {report.year}
        </Button>
      ))}
    </div>
  </div>
);

AnnualReportBox.propTypes = {
  balanceReports: itemsProps.isRequired,
  className: PropTypes.string,
};

AnnualReportBox.defaultProps = {
  className: '',
};

export default React.memo(AnnualReportBox);
