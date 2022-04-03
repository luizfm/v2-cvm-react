import React from 'react';
import PropTypes from 'prop-types';

import Header from '_components/header';
import { headerProps } from '_utils/proptypes';

import styles from './styles.css';

const BaseApp = ({ children, prismic }) => (
  <div className={styles['base-app-container']}>
    <Header navItems={prismic.header.items} />
    <main className={styles.content}>{children}</main>
    <footer>
      <div />
    </footer>
  </div>
);

BaseApp.propTypes = {
  children: PropTypes.node.isRequired,
  prismic: PropTypes.shape({
    header: headerProps.isRequired,
    footer: PropTypes.shape({}),
  }),
};

BaseApp.defaultProps = {
  prismic: {
    header: {
      items: [],
    },
    footer: {},
  },
};

export default React.memo(BaseApp);
