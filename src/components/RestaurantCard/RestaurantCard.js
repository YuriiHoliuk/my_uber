import React from 'react';
import './RestaurantCard.scss';
import { restaurantType } from '../../constants/prop-types';
import { Link } from 'react-router-dom';
import Badge from '../Badge/Badge';

const RestaurantCard = (props) => {
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

export default RestaurantCard;
