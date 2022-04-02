import React from 'react';
import PropTypes from 'prop-types';

import Header from '_components/header';
import { headerProps } from '_utils/proptypes';

const BaseApp = ({ children, prismic }) => {
  console.log(prismic);

  return (
    <>
      <Header navItems={prismic.header.items} />
      <main>{children}</main>
      <footer>
        <div />
      </footer>
    </>
  );
};

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
