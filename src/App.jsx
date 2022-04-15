import React, { useEffect, useMemo, useState } from 'react';
import { Map, toJS } from 'immutable';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

import BaseApp from '_components/base-app';
import { prismicPathFormatter } from '_utils/prismic';
import {
  getPrismicBaseApp,
  getPrismicDocumentByName,
} from '_modules/prismic/selectors';
import {
  getPrismicDocument,
  getPrismicDocumentByUID,
} from '_modules/prismic/actions';
import { getSlices } from '_constants/prismic';

import './styles/_colors.css';
import './styles/global.css';
import styles from './styles.css';

const PRISMIC_TYPE = {
  BASE_APP: 'base_app',
  NEWS: 'news',
};

const App = () => {
  const { pathname } = useLocation();
  const [documentName, setDocumentName] = useState('');
  const [documentUID, setDocumentUID] = useState('');

  useEffect(() => {
    const { docName, uid } = prismicPathFormatter(pathname);

    setDocumentName(docName);
    setDocumentUID(uid);
  }, [pathname]);

  const prismicDocument = useSelector(
    (state) => getPrismicDocumentByName(state, documentName) || Map()
  );

  const prismicBaseApp = useSelector(getPrismicBaseApp);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPrismicDocument(PRISMIC_TYPE.BASE_APP));
  }, [dispatch]);

  useEffect(() => {
    if (documentName) {
      if (documentUID) {
        dispatch(
          getPrismicDocumentByUID(
            documentName,
            documentUID,
            PRISMIC_TYPE.NEWS === documentName
          )
        );
      } else {
        dispatch(getPrismicDocument(documentName));
      }
    }
  }, [dispatch, documentName, documentUID]);

  return (
    <div className={styles['app-container']}>
      <BaseApp prismic={prismicBaseApp}>
        {Object.keys(prismicDocument?.toJS()).map(
          (slice, index) =>
            getSlices(prismicDocument?.toJS()[slice], index)[slice]
        )}
      </BaseApp>
    </div>
  );
};
export default App;
