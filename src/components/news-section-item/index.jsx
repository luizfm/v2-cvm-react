import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button, { ButtonTheme } from '_components/button';
import { formatDate } from '_utils/date-helper';

import styles from './styles.css';

const NewsSectionItem = ({ newsItem, className }) => {
  const handleNewsItemDate = useMemo(
    () => formatDate(newsItem.publicationDate, 'dd/MM'),
    [newsItem.publicationDate]
  );

  return (
    <li className={classnames(styles['news-section-item'], className)}>
      <span className={styles['news-date']}>{handleNewsItemDate}</span>
      <Button
        className={styles['news-button']}
        theme={ButtonTheme.LIGHT_GREEN}
        link={`/news/${newsItem.title}`}
      >
        {newsItem.title}
      </Button>
    </li>
  );
};

NewsSectionItem.propTypes = {
  newsItem: PropTypes.shape({
    title: PropTypes.string,
    publicationDate: PropTypes.string,
  }).isRequired,
  className: PropTypes.string,
};

NewsSectionItem.defaultProps = {
  className: '',
};

export default React.memo(NewsSectionItem);
