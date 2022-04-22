import React, { useMemo } from 'react';
import ReactImageGallery from 'react-image-gallery';

import { prismicSlicePropTypes } from '_utils/proptypes';

import 'react-image-gallery/styles/css/image-gallery.css';
import './lib/lib-styles.css';
import styles from './styles.css';

const ImageGallery = ({ slice }) => {
  const handleImages = useMemo(
    () =>
      slice.items.map((image) => ({
        original: image.imageUrl,
        thumbnail: image.imageUrl,
      })),
    [slice.items]
  );
  return (
    <div className={styles['image-gallery-container']}>
      <ReactImageGallery items={handleImages} />
    </div>
  );
};

ImageGallery.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(ImageGallery);
