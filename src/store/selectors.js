import { createSelector } from 'reselect';
import { DEFAULT_ETA_RANGE } from '../constants/defaults';

const selectRestaurantsList = ({ listData }) => listData;
const detailsSelector = ({ details }) => details;

export const selectRestaurants = createSelector(
  selectRestaurantsList,
  (data) => {
    if (!data) {
      return [];
    }

    const { feedItems, storesMap } = data;

    return feedItems.map(({ uuid }) => {
      const {
        title,
        categories,
        etaRange,
        heroImageUrl,
      } = storesMap[uuid];

      return {
        id: uuid,
        title,
        categories,
        etaRange: etaRange ? etaRange.text : DEFAULT_ETA_RANGE,
        imageUrl: heroImageUrl,
      };
    });
  },
);

export const selectRestaurantDetails = createSelector(
  detailsSelector,
  (_, id) => id,
  (details, id) => {
    const restaurant = details[id];

    if (!restaurant) {
      return null;
    }

    const {
      title,
      etaRange,
      categories,
      heroImageUrls,
      location: { address },
      sections: { 0: { subsectionUuids: sectionIds, uuid: firstSectionUuid } },
      subsectionsMap: sectionsMap,
      sectionEntitiesMap,
    } = restaurant;
    const entitiesMap = sectionEntitiesMap[firstSectionUuid];
    const sections = sectionIds.map(sectionId => sectionsMap[sectionId]);

    return {
      title,
      categories,
      address,
      sections,
      entitiesMap,
      imageUrls: heroImageUrls,
      etaRange: etaRange ? etaRange.text : DEFAULT_ETA_RANGE,
    };
  },
);
