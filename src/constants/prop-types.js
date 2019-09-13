import PropTypes from 'prop-types';

export const restaurantType = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  etaRange: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
