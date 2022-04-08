import React from 'react';

import { prismicSlicePropTypes } from '_utils/proptypes';
import LottieAnimation from '_components/lottie-animation';
import FinancesLottie from '_assets/lotties/finances-lottie.json';

import AnnualReportBox from './annual-report-box';

import styles from './styles.css';

const Accounting = ({ slice }) => (
  <section className={styles['accounting-section-container']}>
    <h2 className={styles['section-title']}>
      Informações legais e transparência
    </h2>
    <AnnualReportBox
      className={styles['accounting-box']}
      balanceReports={slice.items}
    />
    <LottieAnimation
      lottieFile={FinancesLottie}
      className={styles['lottie-animation']}
    />
  </section>
);

Accounting.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(Accounting);
