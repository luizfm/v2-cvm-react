import React from 'react';
import PropTypes from 'prop-types';

import Header from '_components/header';
import { headerProps } from '_utils/proptypes';
import Footer from '_components/footer';

import { Map } from 'immutable';
import styles from './styles.css';

const BaseApp = ({ children, prismic }) => (
  <div className={styles['base-app-container']}>
    <Header navItems={prismic?.getIn(['header', 'items'])} />
    <main className={styles.content}>{children}</main>
    <Footer />
  </div>
);

BaseApp.propTypes = {
  children: PropTypes.node.isRequired,
  prismic: PropTypes.instanceOf(Map),
};

BaseApp.defaultProps = {
  prismic: Map(),
};

export default React.memo(BaseApp);
