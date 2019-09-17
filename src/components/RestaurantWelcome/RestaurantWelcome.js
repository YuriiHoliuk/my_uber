import React from 'react';
import PropTypes from 'prop-types';
import './RestaurantWelcome.scss';
import { ResponsiveImg } from '../ResponsiveImg';
import { Categories } from '../Categories';
import { Badge } from '../Badge';

export const RestaurantWelcome = (props) => {
  const {
    title,
    address,
    imageUrls,
    categories,
    etaRange,
  } = props;

  return (
    <div className="welcome">
      <ResponsiveImg
        alt={title}
        className="welcome__img"
        imageUrls={imageUrls}
      />

      <div className="general-info">
        <h2 className="general-info__title">{title}</h2>
        <Categories categories={categories} isBig />
        <Badge>{etaRange}</Badge>
        <div className="general-info__details">
          <span className="general-info__address">
            {address}
          </span>
          {' • '}
          <a href="/" className="general-info__more">More</a>
        </div>
      </div>
    </div>
  );
};

RestaurantWelcome.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  address: PropTypes.string,
  imageUrls: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string,
    width: PropTypes.number,
  })).isRequired,
  etaRange: PropTypes.string.isRequired,
};

RestaurantWelcome.defaultProps = {
  categories: [],
  address: '',
};
