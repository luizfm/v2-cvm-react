import PropTypes from 'prop-types';

export const headerNavItemProps = PropTypes.shape({
  label: PropTypes.string,
  link: PropTypes.string,
});

export const headerItemsProps = PropTypes.arrayOf(headerNavItemProps);

export const headerProps = PropTypes.shape({
  items: headerItemsProps,
  type: PropTypes.string,
});
