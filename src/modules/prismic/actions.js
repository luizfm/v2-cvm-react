/* eslint-disable prettier/prettier */
import { defineAction } from '_utils/redux';

export const GET_PRISMIC_DOCUMENT = defineAction('GET_PRISMIC_DOCUMENT');

export const getPrismicDocument = (documentData) => (dispatch) => dispatch({
  type: GET_PRISMIC_DOCUMENT.ACTION,
  payload: documentData
});
