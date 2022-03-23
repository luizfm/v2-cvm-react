import React from 'react';
import ReactDOM from 'react-dom';
import { PrismicProvider } from '@prismicio/react';

import Routes from '_routes/';
import { client } from '_api/prismic';

ReactDOM.render(
  <PrismicProvider client={client}>
    <Routes />
  </PrismicProvider>,
  document.getElementById('root')
);
