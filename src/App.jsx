import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useAllPrismicDocumentsByType } from '@prismicio/react';

import ReactBoilerplateImage from '_assets/images/boilerplate.jpg';
import { getPrismicDocument } from './modules/prismic/actions';

import './styles/_colors.css';
import './styles/global.css';
import styles from './styles.css';
import { getPrismicDocumentByName } from './modules/prismic/selectors';
import { getSlices } from './constants/prismic';

const App = () => {
  const { pathname } = useLocation();

  const documentName = useMemo(() => {
    const decamelizedPath = pathname.replace(/-/gi, '_');
    const splitedPath = decamelizedPath.split('/');
    const docName = splitedPath[splitedPath.length - 1];

    return docName;
  }, []);

  const prismicDocument = useSelector(
    (state) => getPrismicDocumentByName(state, documentName) || {}
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrismicDocument('base_app'));
  }, []);

  useEffect(() => {
    dispatch(getPrismicDocument(documentName));
  }, []);

  return (
    <div className={styles['app-container']}>
      {Object.keys(prismicDocument).map(
        (slice, index) => getSlices(prismicDocument[slice], index)[slice]
      )}
    </div>
  );
};
export default App;
