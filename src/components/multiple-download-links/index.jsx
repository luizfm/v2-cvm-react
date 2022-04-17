import React from 'react';
import classnames from 'classnames';

import { prismicSlicePropTypes } from '_utils/proptypes';
import Button, { ButtonTheme } from '_components/button';

import styles from './styles.css';

const MultipleDownloadLinks = ({ slice }) => (
  <section className={styles['multiple-download-links']}>
    <div className={styles['multiple-download-wrapper']}>
      <h1 className={styles.title}>{slice.title}</h1>
      <div className={styles['links-container']}>
        {slice.items.map((item, index) => (
          <div
            key={item.downloadLabel}
            className={classnames(styles['link-wrapper'], {
              [styles.left]: index % 2 === 0,
            })}
          >
            <Button
              className={styles.link}
              link={item.downloadLink}
              theme={ButtonTheme.YELLOW}
            >
              {item.downloadLabel}
            </Button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

MultipleDownloadLinks.propTypes = {
  slice: prismicSlicePropTypes.isRequired,
};

export default React.memo(MultipleDownloadLinks);
