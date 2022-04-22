import React from 'react';

import PrismicRichText from '_components/prismic-rich-text';
import { useLocation } from 'react-router-dom';
import { prismicSlicePropTypes } from '_utils/proptypes';
import { prismicPathFormatter } from '_utils/prismic';

import styles from './styles.css';

const Post = ({ slice }) => {
  const { pathname } = useLocation();
  const { uid } = prismicPathFormatter(pathname);

  return (
    <div className={styles['post-container']}>
      <h1 className={styles['post-title']}>{slice[uid].title}</h1>
      <PrismicRichText content={slice[uid]?.pageElements} />
    </div>
  );
};

Post.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(Post);
