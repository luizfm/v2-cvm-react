import React from 'react';
import { render } from 'react-dom';
import { PrismicProvider } from '@prismicio/react';
import { Provider } from 'react-redux';

import 'swiper/css/bundle';
import './components/slider/lib/lib-styles.css';

import Routes from '_routes/';
import { client } from '_services/prismic';
import configureStore from '_store/configureStore';

const root = () => {
  const store = configureStore({});

  render(
    <Provider store={store}>
      <PrismicProvider client={client}>
        <Routes />
      </PrismicProvider>
    </Provider>,
    document.getElementById('root')
  );
};

root();
