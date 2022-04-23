import { createSelector } from 'reselect';

export const getPrismicDocuments = (state) => state.prismic;

export const getPrismicDocumentByName = (state, documentName) =>
  state.prismic.get(`${documentName}`);

export const getPrismicBaseApp = (state) => state.prismic.get('base_app');

export const getFooterSelector = (state) =>
  state.prismic.getIn(['base_app', 'footer']);

export const getCalendarEvents = (state) =>
  state.prismic.getIn(['calendar', 'event_list', 'items']);

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

export const prismicNewsElementsSelector = (state, view) =>
  state.prismic.getIn(['news', `${view}`, 'pageElements']);

export const prismicNewsSelector = (state) => state.prismic.get('news');

export const prismicNewsResumeSelector = createSelector(
  prismicNewsSelector,
  (newsList) => {
    const slicedNews = newsList
      ?.get('post')
      ?.sort((a, b) => a.publicationDate - b.publicationDate)
      .slice(0, 4);
    const newsResume = slicedNews?.keySeq().toArray();

    const list = newsResume?.map((key) => ({
      title: newsList?.getIn(['post', key, 'title']),
      link: key,
      publicationDate: slicedNews.getIn([`${key}`, 'publicationDate']),
    }));

    return list;
  }
);

export const getPrismicNewsByUIDSelector = (state, documentUID) =>
  state.prismic.getIn(['news', 'post', `${documentUID}`]);
