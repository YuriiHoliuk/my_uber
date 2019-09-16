import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantCard.scss';
import { restaurantType } from '../../constants/prop-types';
import { Badge } from '../Badge';

export const RestaurantCard = (props) => {
  const {
    title,
    categories,
    etaRange,
    imageUrl,
    id,
  } = props;

  return (
    <Link to={`/${id}`} className="restaurant-card">
      <img src={imageUrl} alt="" className="restaurant-card__img" />
      <h3 className="restaurant-card__title">{title}</h3>
      <p className="restaurant-card__categories">
        {categories.join(' • ')}
      </p>
      <Badge>{etaRange}</Badge>
    </Link>
  );
};

RestaurantCard.propTypes = restaurantType;

RestaurantCard.defaultProps = {
  categories: [],
};
