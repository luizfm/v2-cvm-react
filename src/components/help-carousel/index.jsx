import React, { useCallback, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import { prismicSlicePropTypes } from '_utils/proptypes';
import Slider from '_components/slider';
import LottieAnimation from '_components/lottie-animation';
import { LOTTIES_FILES } from '_utils/lotties';
import PrismicRichText from '_components/prismic-rich-text';
import Button, { ButtonTheme } from '_components/button';
import useToggle from '_hooks/use-toggle';
import HelpModal from '_components/help-modal';

import styles from './styles.css';

const HelpCarousel = ({ slice }) => {
  const [isHelpModalOpen, onToggleHelpModal] = useToggle();
  const [currentContent, setCurrentContent] = useState('');

  const onToggleModal = useCallback(
    (event) => {
      const {
        dataset: { content },
      } = event.target;
      setCurrentContent(JSON.parse(content));
      onToggleHelpModal();
    },
    [onToggleHelpModal]
  );

  return (
    <section className={styles['help-carousel-container']}>
      <div className={styles['help-carousel-wrapper']}>
        <h1 className={styles.title}>{slice.title}</h1>
        <PrismicRichText
          content={slice.content}
          className={styles['prismic-text-wrapper']}
        />
        <Slider autoplayDelay={9000}>
          {slice.items.map((item) => (
            <SwiperSlide key={item.donationLabel}>
              <div className={styles['slider-item-container']}>
                <h2 className={styles['donation-label']}>
                  {item.donationLabel}
                </h2>
                <LottieAnimation
                  lottieFile={LOTTIES_FILES[item.donationAnimation].ICON}
                  height={LOTTIES_FILES[item.donationAnimation].HEIGHT}
                  width={LOTTIES_FILES[item.donationAnimation].WIDTH}
                />
                <Button
                  theme={ButtonTheme.PINK_WHITE}
                  className={styles['help-button']}
                  data-content={JSON.stringify(item.donationContent)}
                  onClick={onToggleModal}
                >
                  Ajude com esta forma
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Slider>
      </div>
      {isHelpModalOpen && (
        <HelpModal content={currentContent} onExit={onToggleHelpModal} />
      )}
    </section>
  );
};

HelpCarousel.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(HelpCarousel);
