import React, { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import BaseApp from '_components/base-app';
import { getPrismicDocument } from './modules/prismic/actions';
import {
  getPrismicBaseApp,
  getPrismicDocumentByName,
} from './modules/prismic/selectors';
import { getSlices } from './constants/prismic';

import './styles/_colors.css';
import './styles/global.css';
import styles from './styles.css';

const PRISMIC_GLOBAL_TYPE = {
  BASE_APP: 'base_app',
};

const App = () => {
  const { pathname } = useLocation();

  const documentName = useMemo(() => {
    const decamelizedPath = pathname.replace(/-/gi, '_');
    const splitedPath = decamelizedPath.split('/');
    const docName = splitedPath[splitedPath.length - 1];

    return docName;
  }, [pathname]);

  const prismicDocument = useSelector(
    (state) => getPrismicDocumentByName(state, documentName) || {}
  );

  const prismicBaseApp = useSelector(getPrismicBaseApp);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrismicDocument(PRISMIC_GLOBAL_TYPE.BASE_APP));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPrismicDocument(documentName));
  }, [dispatch, documentName]);

  return (
    <div className={styles['app-container']}>
      <BaseApp prismic={prismicBaseApp}>
        {Object.keys(prismicDocument).map(
          (slice, index) => getSlices(prismicDocument[slice], index)[slice]
        )}
      </BaseApp>
    </div>
  );
};
export default App;
