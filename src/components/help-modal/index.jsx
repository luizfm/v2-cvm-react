import React from 'react';
import PropTypes from 'prop-types';

import Modal from '_components/modal';
import CloseIcon from '_assets/icons/close-icon.svg';
import PrismicRichText from '_components/prismic-rich-text';
import { prismicRichTextPropTypes } from '_utils/proptypes';
import IconButton from '../icon-button';

import styles from './styles.css';

const HelpModal = ({ content, onExit }) => (
  <Modal id="header-menu-modal" title="Menu modal">
    <div className={styles['content-wrapper']}>
      <div className={styles['modal-header']}>
        <h1 className={styles.title}>Ajudando a CVM</h1>
        <IconButton
          className={styles['close-button']}
          iconClassName={styles['close-icon']}
          icon={CloseIcon}
          onClick={onExit}
        />
      </div>
      <PrismicRichText content={content} className={styles.content} />
    </div>
  </Modal>
);

HelpModal.propTypes = {
  content: PropTypes.arrayOf(prismicRichTextPropTypes).isRequired,
  onExit: PropTypes.func,
};

HelpModal.defaultProps = {
  onExit: () => {},
};

export default React.memo(HelpModal);
