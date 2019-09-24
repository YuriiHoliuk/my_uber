import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RestaurantPage.scss';
import { CategoriesMenu } from '../CategoriesMenu';
import { MenuSections } from '../MenuSections';
import { RestaurantWelcome } from '../RestaurantWelcome';
import { Loader } from '../Loader';
import { Error } from '../Error';

export class RestaurantPage extends Component {
  componentDidMount() {
    const { restaurant, loadRestaurantDetails, match } = this.props;

    if (!restaurant) {
      loadRestaurantDetails(match.params.id);
    }
  }

  render() {
    const { restaurant, isLoading, error } = this.props;

    if (error && !isLoading) {
      return <Error errorMessage={error} />;
    }

    if (isLoading || !restaurant) {
      return <Loader />;
    }

    const {
      title,
      categories,
      address,
      sections,
      entitiesMap,
      imageUrls,
      etaRange,
    } = restaurant;

    return (
      <div>
        <RestaurantWelcome
          title={title}
          categories={categories}
          address={address}
          imageUrls={imageUrls}
          etaRange={etaRange}
        />

        <CategoriesMenu list={sections} />

        <MenuSections
          sections={sections}
          entitiesMap={entitiesMap}
        />
      </div>
    );
  }
}

RestaurantPage.propTypes = {
  loadRestaurantDetails: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
  restaurant: PropTypes.shape({
    title: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string),
    address: PropTypes.string,
    sections: PropTypes.arrayOf(PropTypes.shape({
      uuid: PropTypes.string,
      title: PropTypes.string,
      itemUuids: PropTypes.arrayOf(PropTypes.string),
    })),
    entitiesMap: PropTypes.shape({}),
    imageUrls: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      width: PropTypes.number,
    })),
    etaRange: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
  error: PropTypes.string,
};

RestaurantPage.defaultProps = {
  restaurant: null,
  isLoading: false,
  error: null,
};
