/* eslint-disable prettier/prettier */
import { defineAction } from '_utils/redux';
import * as prismicService from '_services/prismic'

export const GET_PRISMIC_DOCUMENT = defineAction('GET_PRISMIC_DOCUMENT');

export const getPrismicDocument = (type, params) => (dispatch) => dispatch({
  type: GET_PRISMIC_DOCUMENT.ACTION,
  payload: prismicService.getDocumentByType(type, params)
});
