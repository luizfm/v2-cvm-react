/* eslint-disable indent */
export const formatSliceItems = (sliceItems) => {
  let formattedSlicesItems = [];

  sliceItems.forEach((item) => {
    if (item.title) {
      formattedSlicesItems = [
        ...formattedSlicesItems,
        {
          title: item.title?.[0].text,
          text: item.text?.[0].text,
        },
      ];
    }

    if (item.content) {
      formattedSlicesItems = [
        ...formattedSlicesItems,
        {
          content: item.content,
          ...(item.image
            ? {
                image: item.image.url,
              }
            : {}),
        },
      ];
    }

    if (item.download_label) {
      formattedSlicesItems = [
        ...formattedSlicesItems,
        {
          downloadLabel: item.download_label?.[0].text,
          downloadLink: item.download_link?.[0].text,
        },
      ];
    }

    if (item.company_name) {
      formattedSlicesItems = [
        ...formattedSlicesItems,
        {
          name: item.company_name[0].text,
          url: item.company_logo.url,
        },
      ];
    }

    if (item.carousel_image_item) {
      formattedSlicesItems = [
        ...formattedSlicesItems,
        item.carousel_image_item.url,
      ];
    }

    if (item.label) {
      formattedSlicesItems = [
        ...formattedSlicesItems,
        {
          label: item.label[0].text,
          link: item.link[0].text,
        },
      ];
    }

    if (item.facebook) {
      formattedSlicesItems = [
        ...formattedSlicesItems,
        {
          name: 'facebook',
          link: item.facebook[0].text,
        },
      ];
    }

    if (item.twitter) {
      formattedSlicesItems = [
        ...formattedSlicesItems,
        {
          name: 'twitter',
          link: item.twitter[0].text,
        },
      ];
    }

    if (item.instagram) {
      formattedSlicesItems = [
        ...formattedSlicesItems,
        {
          name: 'instagram',
          link: item.instagram[0].text,
        },
      ];
    }

    if (item.accounting_year) {
      formattedSlicesItems = [
        ...formattedSlicesItems,
        {
          year: item.accounting_year[0].text,
          link: item.accounting_file_link[0].text,
        },
      ];
    }
  });

  return formattedSlicesItems;
};

export const formatSlices = (slices) => {
  let formattedSlices = {};

  slices.forEach((slice) => {
    if (slice.slice_type) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          type: slice.slice_type,
        },
      };
    }

    if (slice.primary.first_text) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          firstText: slice.primary.first_text,
        },
      };
    }

    if (slice.primary.second_text) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          secondText: slice.primary.second_text,
        },
      };
    }

    if (slice.primary.title) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          title: slice.primary.title[0].text,
        },
      };
    }

    if (slice.primary.content) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          content: slice.primary.content,
        },
      };
    }

    if (slice.primary.mission_content) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          missionContent: slice.primary.mission_content[0].text,
        },
      };
    }

    if (slice.primary.vision_content) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          visionContent: slice.primary.vision_content[0].text,
        },
      };
    }

    if (slice.primary.values_content) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          valuesContent: slice.primary.values_content.map(
            (value) => value.text
          ),
        },
      };
    }

    if (slice.primary.general_content) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          generalContent: slice.primary.general_content,
        },
      };
    }

    if (slice.primary.specifics_content) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          specificsContent: slice.primary.specifics_content,
        },
      };
    }

    if (slice.primary.background_image) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          backgroundImage: slice.primary.background_image,
        },
      };
    }

    if (slice.primary.image_link) {
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          imageUrl: slice.primary.image_link[0].text,
        },
      };
    }

    if (slice.items) {
      const items = formatSliceItems(slice.items);
      formattedSlices = {
        ...formattedSlices,
        [slice.slice_type]: {
          ...formattedSlices[slice.slice_type],
          ...(slice.primary.section_title
            ? {
                [slice.primary.section_title[0].text]: {
                  items,
                },
              }
            : {
                items,
              }),
        },
      };
    }
  });

  return formattedSlices;
};

export const formatPrismicDocument = (prismic) => {
  let formattedDocument = {};
  prismic.forEach((document) => {
    if (document.type) {
      formattedDocument = {
        ...formattedDocument,
        type: document.type,
      };
    }

    if (document.data.body) {
      const slices = formatSlices(document.data.body);
      formattedDocument = {
        ...formattedDocument,
        slices,
      };
    }
  });

  return formattedDocument;
};

export const formatPrismicAsRichText = (prismic) => {
  let documents = [];

  prismic.forEach((document) => {
    if (document.uid) {
      documents = [
        ...documents,
        {
          uid: document.uid,
          type: document.type,
          publicationDate: document.last_publication_date,
          elements: document.data.content,
          group: document.data.element_group[0]?.text,
        },
      ];
    }
  });

  return documents;
};

export const prismicPathFormatter = (pathname) => {
  const decamelizedPath = pathname.replace(/-/gi, '_');
  const splittedPath = decamelizedPath.split('/');

  if (splittedPath.length > 1) {
    const [_, docName, uid] = splittedPath;
    return {
      docName,
      uid,
    };
  }

  const [_, docName] = splittedPath;

  return { docName };
};
