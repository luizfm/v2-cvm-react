import * as prismic from '@prismicio/client';

export const client = new prismic.Client(process.env.PRISMIC_REPOSITORY_URL, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});

export const getDocumentByType = (type, params) => client.getByType(`${type}`);

export const getDocumentByTypeAndUID = (type, uid, params) =>
  client.getByUID(`${type}`, `${uid}`);
