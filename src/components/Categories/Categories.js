import React from 'react';
import PropTypes from 'prop-types';
import './Categories.scss';

export const Categories = (props) => {
  const { categories, isBig } = props;
  const className = `categories ${isBig ? 'categories--big' : ''}`;

  return (
    <p className={className}>
      {categories.join(' • ')}
    </p>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
  isBig: PropTypes.bool,
};

Categories.defaultProps = {
  categories: [],
  isBig: false,
};
