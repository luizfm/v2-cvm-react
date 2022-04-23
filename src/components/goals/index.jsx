import React from 'react';

import { prismicSlicePropTypes } from '_utils/proptypes';
import GoalsLottie from '_assets/lotties/goals-lottie.json';
import LottieAnimation from '_components/lottie-animation';
import useWindowSize from '_hooks/use-window-size';
import GoalsTable from './goals-table';
import GoalsSimpleText from './goals-simple-text';

import styles from './styles.css';

const Goals = ({ slice }) => {
  const { isMobile } = useWindowSize();

  return (
    <section className={styles['goals-section-container']}>
      <div className={styles['goals-section-wrapper']}>
        <h1 className={styles.title}>{slice.title}</h1>
        <div className={styles['goals-content']}>
          {isMobile ? (
            <GoalsSimpleText
              specific={slice.specificsContent}
              general={slice.generalContent}
            />
          ) : (
            <GoalsTable
              specific={slice.specificsContent}
              general={slice.generalContent}
            />
          )}
        </div>
        <LottieAnimation lottieFile={GoalsLottie} />
      </div>
    </section>
  );
};

Goals.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(Goals);
