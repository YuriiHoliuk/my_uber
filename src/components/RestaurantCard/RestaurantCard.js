import React from 'react';
import './RestaurantCard.scss';
import { restaurantType } from '../../constants/prop-types';

const RestaurantCard = (props) => {
  const {
    title,
    categories,
    etaRange,
    imgUrl,
  } = props;

  return (
    <div className="restaurant-card">
      <img src={imgUrl} alt="" className="restaurant-card__img" />
      <h3 className="restaurant-card__title">{title}</h3>
      <p className="restaurant-card__categories">
        {categories.join(' • ')}
      </p>
      <span className="restaurant-card__eta">{etaRange}</span>
    </div>
  );
};

RestaurantCard.propTypes = restaurantType;

RestaurantCard.defaultProps = {
  categories: [],
};

export default RestaurantCard;
