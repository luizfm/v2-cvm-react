import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import PrismicRichText from '_components/prismic-rich-text';
import { prismicRichTextPropTypes } from '_utils/proptypes';

import styles from './styles.css';

export const TextAndImageItemVariant = {
  TEXT_IMAGE: 'text-image',
  IMAGE_TEXT: 'image-text',
};

const TextAndImageItem = ({ content, image, variant, className }) => (
  <div
    className={classnames(
      styles['text-and-image-item-container'],
      styles[variant],
      className
    )}
  >
    <PrismicRichText content={content} />
    <img className={styles.image} src={image} alt="" />
  </div>
);

TextAndImageItem.propTypes = {
  content: PropTypes.arrayOf(prismicRichTextPropTypes).isRequired,
  className: PropTypes.string,
  image: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(Object.values(TextAndImageItemVariant)),
};

TextAndImageItem.defaultProps = {
  variant: TextAndImageItemVariant.TEXT_IMAGE,
  className: '',
};

export default React.memo(TextAndImageItem);
