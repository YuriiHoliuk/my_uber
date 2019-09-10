import React from 'react';
import PropTypes from 'prop-types';
import { restaurantType } from '../../constants/prop-types';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurantsList.scss';

const RestaurantsList = (props) => {
  const { restaurants } = props;

  return (
    <div className="content">
      <div className="restaurants-list">
        {restaurants.map(restaurant => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(restaurantType).isRequired,
};

export default RestaurantsList;
