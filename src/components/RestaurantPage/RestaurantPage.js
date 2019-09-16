import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RestaurantPage.scss';
import { Badge } from '../Badge';
import { CategoriesMenu } from '../CategoriesMenu';
import { MenuSection } from '../MenuSection';

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
    const maxSizeImg = imageUrls.reduce((acc, imgData) => {
      return imgData.width > acc.width
        ? imgData
        : acc;
    });
    const srcSet = imageUrls
      .map(({ width, url }) => `${url} ${width}w`)
      .join(',\n');

    return (
      <>
        <div className="welcome">
          <img
            srcSet={srcSet}
            src={maxSizeImg.url}
            alt={title}
            className="welcome__img"
          />

          <div className="general-info">
            <h2 className="general-info__title">{title}</h2>
            <p className="general-info__categories">
              {categories.join(' • ')}
            </p>
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
        <div className="content">
          <CategoriesMenu list={sections} />

          {sections.map(({ uuid, title, itemUuids }) => {
            return (
              <MenuSection
                key={uuid}
                uuid={uuid}
                title={title}
                items={itemUuids.map(itemUUid => entitiesMap[itemUUid])}
              />
            );
          })}

        </div>
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
