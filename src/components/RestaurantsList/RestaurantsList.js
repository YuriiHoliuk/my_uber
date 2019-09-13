import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { restaurantType } from '../../constants/prop-types';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurantsList.scss';

class RestaurantsList extends Component {
  componentDidMount() {
    this.props.loadRestaurants();
  }

  render() {
    const { restaurants } = this.props;

    return (
      <div className="content">
        <div className="restaurants-list">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    );
  }
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape(restaurantType)).isRequired,
  loadRestaurants: PropTypes.func.isRequired,
};

export default RestaurantsList;
