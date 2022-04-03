import { createSelector } from 'reselect';

export const getPrismicDocuments = (state) => state.prismic;

export const getPrismicDocumentByName = (state, documentName) =>
  state.prismic.get(`${documentName}`);

export const getPrismicBaseApp = (state) => state.prismic.get('base_app');

export const getFooterSelector = (state) =>
  state.prismic.getIn(['base_app', 'footer']);

export const prismicFooterSelector = createSelector(
  getFooterSelector,
  (footer) => {
    const keys = footer
      ? Object.keys(footer).filter((item) => item !== 'type')
      : undefined;

    return keys?.map((key) => ({
      sectionName: key,
      items: footer[key].items,
    }));
  }
);
