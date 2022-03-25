import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import humps from 'humps';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

import Button from '_components/button';
import ReactBoilerplateImage from '_assets/images/boilerplate.jpg';
import { getPrismicDocument } from './modules/prismic/actions';

import './styles/_colors.css';
import './styles/global.css';
import styles from './styles.css';

const App = () => {
  const { pathname } = useLocation();
  const documentName = useMemo(() => {
    const decamelizedPath = pathname.replace(/-/gi, '_');
    const splitedPath = decamelizedPath.split('/');
    const docName = splitedPath[splitedPath.length - 1];

    return docName;
  }, []);
  const [document] = useAllPrismicDocumentsByType(documentName);
  const [baseApp] = useAllPrismicDocumentsByType('base_app');
  const dispatch = useDispatch();

  useEffect(() => {
    if (document) {
      dispatch(getPrismicDocument(document));
    }
  }, [document]);

  useEffect(() => {
    if (baseApp) {
      dispatch(getPrismicDocument(baseApp));
    }
  }, [baseApp]);

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
