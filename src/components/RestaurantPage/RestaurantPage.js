import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RestaurantPage.scss';
import { CategoriesMenu } from '../CategoriesMenu';
import { MenuSections } from '../MenuSections';
import { RestaurantWelcome } from '../RestaurantWelcome';

export class RestaurantPage extends Component {
  componentDidMount() {
    this.props.loadRestaurantDetails(this.props.match.params.id);
  }

  render() {
    const { restaurant } = this.props;

    if (!restaurant) {
      return null;
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
      <>
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
      </>
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
};

RestaurantPage.defaultProps = {
  restaurant: null,
};
