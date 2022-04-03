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
