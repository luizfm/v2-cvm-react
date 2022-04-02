export const getPrismicDocuments = (state) => state.prismic;

export const getPrismicDocumentByName = (state, documentName) =>
  state.prismic.get(`${documentName}`);

export const getPrismicBaseApp = (state) => state.prismic.get('base_app');
