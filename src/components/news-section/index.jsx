import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPrismicDocument } from '_modules/prismic/actions';
import { prismicSlicePropTypes } from '_utils/proptypes';
import { prismicNewsResumeSelector } from '_modules/prismic/selectors';
import NewsSectionItem from '_components/news-section-item';
import NewsPostLottie from '_assets/lotties/news-post-lottie.json';

import styles from './styles.css';
import LottieAnimation from '../lottie-animation';

const NewsSection = ({ slice }) => {
  const dispatch = useDispatch();
  const newsResume = useSelector(prismicNewsResumeSelector);

  useEffect(() => {
    dispatch(getPrismicDocument('news', true));
  }, [dispatch]);

  return (
    <section className={styles['news-section-container']}>
      <h1 className={styles['news-section-title']}>Resumo de notícias</h1>
      <LottieAnimation
        className={styles['lottie-wrapper']}
        lottieFile={NewsPostLottie}
        height={100}
        width={100}
      />
      {newsResume?.map((currentNews) => (
        <NewsSectionItem
          key={currentNews.title}
          className={styles['news-items']}
          newsItem={currentNews}
        />
      ))}
    </section>
  );
};

NewsSection.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(NewsSection);
