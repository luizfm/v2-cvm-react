import React, { useMemo } from 'react';

import { prismicSlicePropTypes } from '_utils/proptypes';
import PrismicRichText from '_components/prismic-rich-text';
import BuildingLottie from '_assets/lotties/building-lottie.json';
import LottieAnimation from '_components/lottie-animation';
import useWindowSize from '_hooks/use-window-size';

import styles from './styles.css';

const TextSection = ({ slice }) => {
  const { isMobile, isMedium } = useWindowSize();

  const lottieSizes = useMemo(
    () => ({
      width: isMobile || isMedium ? 300 : 600,
      height: isMobile || isMedium ? 150 : 300,
    }),
    [isMedium, isMobile]
  );

  return (
    <section className={styles['text-section-container']}>
      <div className={styles['text-section-wrapper']}>
        {slice.items.map((item, index) => (
          <div
            className={styles['text-content']}
            key={`${item.title}-${index + 1}`}
          >
            <h1 className={styles.title}>{item.title}</h1>
            <PrismicRichText content={item.content || []} />
          </div>
        ))}
        <LottieAnimation
          lottieFile={BuildingLottie}
          width={lottieSizes.width}
          height={lottieSizes.height}
        />
      </div>
    </section>
  );
};

TextSection.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(TextSection);
