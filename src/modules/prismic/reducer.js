import { formatPrismicDocument } from '_utils/prismic';
import { Map } from 'immutable';
import { createReducer } from '_utils/redux';

import { GET_PRISMIC_DOCUMENT } from './actions';

const INITIAL_STATE = Map();

const reducer = createReducer(INITIAL_STATE, {
  [GET_PRISMIC_DOCUMENT.FULFILLED]: (state, { payload }) => {
    // const prismicDocState = formatPrismicDocument(payload);
    console.log(payload, 'aqui');
    // return state.set(`${prismicDocState.type}`, prismicDocState.slices);
    return state;
  },
});

export default reducer;
