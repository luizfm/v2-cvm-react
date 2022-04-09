import React from 'react';

import { prismicSlicePropTypes } from '_utils/proptypes';
import IconButton from '_components/icon-button';
import { SOCIAL_MEDIA_TYPES } from '_constants/social-media';
import SocialMediaLottie from '_assets/lotties/social-media-lottie.json';

import styles from './styles.css';
import LottieAnimation from '../lottie-animation';

const SocialMedia = ({ slice }) => (
  <section className={styles['social-media-container']}>
    <h2 className={styles['social-media-title']}>Rede sociais</h2>
    <LottieAnimation lottieFile={SocialMediaLottie} />
    <div className={styles['social-media-links']}>
      {slice.items.map((socialMedia) => (
        <IconButton
          key={socialMedia.name}
          link={socialMedia.link}
          icon={SOCIAL_MEDIA_TYPES[socialMedia?.name?.toUpperCase()]?.icon}
          externalUrl
          className={styles['media-button']}
          iconClassName={styles['media-icon']}
        />
      ))}
    </div>
  </section>
);

SocialMedia.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default SocialMedia;
