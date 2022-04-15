import { Map, fromJS } from 'immutable';
import { createReducer } from '_utils/redux';

import { formatPrismicDocument, formatPrismicAsRichText } from '_utils/prismic';
import { GET_PRISMIC_DOCUMENT } from './actions';

const INITIAL_STATE = Map();

const reducer = createReducer(INITIAL_STATE, {
  [GET_PRISMIC_DOCUMENT.FULFILLED]: (state, { payload, meta }) => {
    if (meta.getRichText) {
      const prismicDocState = formatPrismicAsRichText(
        payload.results || [payload]
      );

      let newState = state;
      prismicDocState.forEach((document) => {
        newState = newState
          .setIn(
            [
              `${document.type}`,
              `${document.group}`,
              `${document.uid}`,
              'pageElements',
            ],
            document.elements
          )
          .setIn(
            [
              `${document.type}`,
              `${document.group}`,
              `${document.uid}`,
              'publicationDate',
            ],
            document.publicationDate
          );
      });

      return newState;
    }

    const prismicDocState = formatPrismicDocument(payload.results);
    return state.set(`${prismicDocState.type}`, Map(prismicDocState.slices));
  },
});

export default reducer;
