import * as prismic from '@prismicio/client';

export const client = prismic.createClient(process.env.PRISMIC_REPOSITORY_URL, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});

export const getDocumentByType = (type, params) =>
  client.getByType(`${type}`).then((values) => {
    
    return values;
  });