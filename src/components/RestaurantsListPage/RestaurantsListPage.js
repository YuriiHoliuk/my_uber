import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { restaurantType } from '../../constants/prop-types';
import { RestaurantCard } from '../RestaurantCard';
import './RestaurantsListPage.scss';
import { Loader } from '../Loader';
import { Error } from '../Error';

export class RestaurantsListPage extends Component {
  componentDidMount() {
    const {
      isLoaded,
      loadRestaurants,
    } = this.props;

    if (!isLoaded) {
      loadRestaurants();
    }
  }

  render() {
    const { restaurants, isLoading, error } = this.props;

    if (error && !isLoading) {
      return <Error errorMessage={error} />;
    }

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div className="content page">
        <div className="cards-grid restaurants">
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
  isLoading: PropTypes.bool,
  isLoaded: PropTypes.bool,
  error: PropTypes.string,
};

RestaurantsListPage.defaultProps = {
  isLoading: false,
  isLoaded: false,
  error: null,
};
