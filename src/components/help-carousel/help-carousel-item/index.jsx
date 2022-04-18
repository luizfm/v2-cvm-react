import React from 'react';
import PropTypes from 'prop-types';

import LOTTIES_FILES from '_utils/lotties';
import LottieAnimation from '_components/lottie-animation';
import { prismicRichTextPropTypes } from '_/utils/proptypes';

const HelpCarouselItem = ({ title, content, animation }) => (
  <div>
    <span>{title}</span>
    <LottieAnimation lottieFile={LOTTIES_FILES[animation]} />
  </div>
);

HelpCarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: prismicRichTextPropTypes.isRequired,
  animation: PropTypes.shape({}).isRequired,
};

export default React.memo(HelpCarouselItem);
