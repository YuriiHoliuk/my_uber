import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { restaurantType } from '../../constants/prop-types';
import { RestaurantCard } from '../RestaurantCard';
import './RestaurantsList.scss';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    this.props.loadRestaurants();
  }

  render() {
    const { restaurants } = this.props;

    return (
      <div className="content">
        <div className="cards-grid">
          {restaurants.map(restaurant => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    );
  }
}

RestaurantsListPage.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape(restaurantType)).isRequired,
  loadRestaurants: PropTypes.func.isRequired,
};