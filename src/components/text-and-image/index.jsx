import React from 'react';

import { prismicSlicePropTypes } from '_utils/proptypes';
import TextAndImageItem, {
  TextAndImageItemVariant,
} from './text-and-image-item';

import styles from './styles.css';

const TextAndImage = ({ slice }) => (
  <section className={styles['text-and-image-container']}>
    <h1 className={styles.title}>{slice.title}</h1>
    {slice.items.map((item, index) => (
      <TextAndImageItem
        className={styles['text-and-image-item']}
        key={item.image}
        content={item.content}
        image={item.image}
        variant={
          index % 2 === 0
            ? TextAndImageItemVariant.TEXT_IMAGE
            : TextAndImageItemVariant.IMAGE_TEXT
        }
      />
    ))}
  </section>
);

TextAndImage.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(TextAndImage);
