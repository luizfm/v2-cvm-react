import React, { useCallback, useMemo } from 'react';

import { prismicSlicePropTypes } from '_utils/proptypes';
import IdentityItem, { IdentityItemVariant } from './identity-item';

import styles from './styles.css';

const IDENTITY_ITEMS = {
  VISION: {
    label: 'Visão',
    value: 'visionContent',
  },
  MISSION: {
    label: 'Missão',
    value: 'missionContent',
  },
  VALUES: {
    label: 'Valores',
    value: 'valuesContent',
  },
};

const Identity = ({ slice }) => {
  const identityItemVariant = useCallback(
    (value) =>
      value === IDENTITY_ITEMS.VALUES.value
        ? IdentityItemVariant.LIST
        : IdentityItemVariant.TEXT,
    []
  );

  return (
    <section className={styles['identity-section-container']}>
      <div className={styles['identity-wrapper']}>
        <h1 className={styles.title}>{slice.title}</h1>
        <div className={styles['identity-content']}>
          {Object.values(IDENTITY_ITEMS)?.map((item) => (
            <IdentityItem
              content={slice[item.value]}
              subtitle={item.label}
              variant={identityItemVariant(item.value)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

Identity.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(Identity);
