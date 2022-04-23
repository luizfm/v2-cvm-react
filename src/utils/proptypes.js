import PropTypes from 'prop-types';

export const itemProps = PropTypes.shape({
  label: PropTypes.string,
  link: PropTypes.string,
});

export const itemsProps = PropTypes.arrayOf(itemProps);

export const headerProps = PropTypes.shape({
  items: itemsProps,
  type: PropTypes.string,
});

export const svgPropTypes = PropTypes.shape({
  viewBox: PropTypes.string,
  id: PropTypes.string,
});

export const footerProps = PropTypes.shape({
  type: PropTypes.string,
  Geral: PropTypes.shape({
    items: itemsProps,
  }),
  Ajude: PropTypes.shape({
    items: itemsProps,
  }),
  Contato: PropTypes.shape({
    items: itemsProps,
  }),
});

export const prismicSlicePropTypes = PropTypes.shape({
  backgroundImage: PropTypes.shape({
    dimensions: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    alt: PropTypes.string,
    copyright: PropTypes.string,
    url: PropTypes.string,
  }),
  imageUrl: PropTypes.string,
  items: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
  title: PropTypes.string,
  type: PropTypes.string,
});

export const prismicRichTextPropTypes = PropTypes.shape({
  type: PropTypes.string,
  text: PropTypes.string,
  spans: PropTypes.arrayOf(
    PropTypes.shape({
      start: PropTypes.number,
      end: PropTypes.number,
      type: PropTypes.string,
    })
  ),
  dimensions: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number,
  }),
  alt: PropTypes.string,
  copyright: PropTypes.string,
  url: PropTypes.string,
});
