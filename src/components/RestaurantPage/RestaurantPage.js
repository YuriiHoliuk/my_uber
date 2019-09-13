import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './RestaurantPage.scss';
import { DEFAULT_ETA_RANGE } from '../../constants/defaults';
import Badge from '../Badge/Badge';
import { CategoriesMenu } from '../CategoriesMenu';
import { MenuSection } from '../MenuSection';

class RestaurantPage extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.loadRestaurantDetails(this.props.match.params.id);
  }

  render() {
    // console.log(this.props.restaurant);
    if (!this.props.restaurant) {
      return null;
    }

    const {
      restaurant: {
        heroImageUrls,
        title,
        etaRange,
        categories,
        location: { address },
        sections: { 0: { subsectionUuids: sectionIds, uuid: firstSectionUuid } },
        subsectionsMap: sectionsMap,
        sectionEntitiesMap,
      },
    } = this.props;
    const entitiesMap = sectionEntitiesMap[firstSectionUuid];
    const sections = sectionIds.map(id => sectionsMap[id]);
    const maxSizeImg = heroImageUrls.reduce((acc, imgData) => {
      return imgData.width > acc.width
        ? imgData
        : acc;
    });
    const srcSet = heroImageUrls
      .map(({ width, url }) => `${url} ${width}w`)
      .join(',\n');

    return (
      <div>
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
            <Badge>
              {etaRange ? etaRange.text : DEFAULT_ETA_RANGE}
            </Badge>
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
                uuid={uuid}
                title={title}
                items={itemUuids.map(itemUUid => entitiesMap[itemUUid])}
              />
            );
          })}

          {/*<pre>{JSON.stringify(this.props.restaurant, null, 4)}</pre>*/}
        </div>
      </div>
    );
  }
}

RestaurantPage.propTypes = {};

export default RestaurantPage;
