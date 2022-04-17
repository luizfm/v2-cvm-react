import React from 'react';

import { prismicSlicePropTypes } from '_utils/proptypes';
import GoalsLottie from '_assets/lotties/goals-lottie.json';
import LottieAnimation from '_components/lottie-animation';
import GoalsTable from './goals-table';

import styles from './styles.css';

const Goals = ({ slice }) => (
  <section className={styles['goals-section-container']}>
    <div className={styles['goals-section-wrapper']}>
      <h1 className={styles.title}>{slice.title}</h1>
      <div className={styles['goals-content']}>
        <GoalsTable
          specific={slice.specificsContent}
          general={slice.generalContent}
        />
      </div>
      <LottieAnimation lottieFile={GoalsLottie} />
    </div>
  </section>
);

Goals.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(Goals);
