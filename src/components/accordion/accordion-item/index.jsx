import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import ArrowDownIcon from '_assets/icons/arrow-down-icon.svg';
import IconButton from '_components/icon-button';
import useToggle from '_hooks/use-toggle';

import styles from './styles.css';

const AccordionItem = ({ accordionItem }) => {
  const [isExpanded, onToggleItem] = useToggle();

  return (
    <article className={styles['accordion-item-container']}>
      <div className={styles['accordion-header']}>
        <h1>{accordionItem.title}</h1>
        <IconButton
          className={styles['icon-button']}
          iconClassName={classnames(styles['arrow-icon'], {
            [styles['is-expanded']]: isExpanded,
          })}
          icon={ArrowDownIcon}
          onClick={onToggleItem}
        />
      </div>
      {isExpanded && (
        <div className={styles['accordion-content']}>
          <p>{accordionItem.text}</p>
        </div>
      )}
    </article>
  );
};

AccordionItem.propTypes = {
  accordionItem: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default React.memo(AccordionItem);
