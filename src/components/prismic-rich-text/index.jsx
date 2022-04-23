import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import classnames from 'classnames';

import { prismicRichTextPropTypes } from '_utils/proptypes';

import styles from './styles.css';

const PrismicRichText = ({ content, className }) => (
  <div className={classnames(styles['prismic-text-container'], className)}>
    <RichText render={content} />
  </div>
);

PrismicRichText.propTypes = {
  content: PropTypes.arrayOf(prismicRichTextPropTypes).isRequired,
  className: PropTypes.string,
};

PrismicRichText.defaultProps = {
  className: '',
};

export default React.memo(PrismicRichText);
