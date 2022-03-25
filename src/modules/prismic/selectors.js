export const getPrismicDocuments = (state) => state.prismic;

export const getPrismicDocumentByName = (state, documentName) =>
  state.prismic.get(`${documentName}`);
