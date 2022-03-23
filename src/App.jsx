import React from 'react';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

import Button from '_components/button';
import ReactBoilerplateImage from '_assets/images/boilerplate.jpg';

import './styles/_colors.css';
import './styles/global.css';
import styles from './styles.css';

const App = () => {
  const [document] = useAllPrismicDocumentsByType('home_page');

  console.log(document);
  return (
    <div className={styles['app-container']}>
      <h1 className={styles['app-boilerplate-title']}>
        React Boilerplate working!!!
      </h1>
      <Button />
      <img
        className={styles['boilerplate-image']}
        src={ReactBoilerplateImage}
        alt="React boilerplate working"
      />
    </div>
  );
};
export default App;
