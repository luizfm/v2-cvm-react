import React from 'react';
import classnames from 'classnames';
import { prismicSlicePropTypes } from '_utils/proptypes';

import ArrowDownIcon from '_assets/icons/arrow-down-icon.svg';
import IconButton from '_components/icon-button';

import styles from './styles.css';
import AccordionItem from './accordion-item';

const Accordion = ({ slice }) => (
  <section className={styles['accordion-container']}>
    <h1 className={styles['accordion-section-title']}>
      Os projetos disponibilizados pela CVM
    </h1>
    <div className={styles['accordion-wrapper']}>
      {slice.items.map((item) => (
        <AccordionItem key={item.title} accordionItem={item} />
      ))}
    </div>
  </section>
);

Accordion.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(Accordion);
