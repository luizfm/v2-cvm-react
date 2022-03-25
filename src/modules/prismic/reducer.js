import { formatPrismicDocument } from '_utils/prismic';
import { Map } from 'immutable';
import { createReducer } from '_utils/redux';

import { GET_PRISMIC_DOCUMENT } from './actions';

const INITIAL_STATE = Map();

const reducer = createReducer(INITIAL_STATE, {
  [GET_PRISMIC_DOCUMENT.ACTION]: (state, { payload }) => {
    const prismicDocState = formatPrismicDocument(payload);
    return state.set([`${prismicDocState.type}`], prismicDocState.slices);
  },
});

export default reducer;
