import { combineReducers } from 'redux';

import prismic from './prismic/reducer';

const appReducer = combineReducers({ prismic });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
