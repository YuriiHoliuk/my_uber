import { createSelector } from 'reselect';
import { DEFAULT_ETA_RANGE } from '../constants/defaults';

const restaurantsRootSelector = ({ restaurants }) => restaurants;

export const selectRestaurants = createSelector(
  restaurantsRootSelector,
  ({ data }) => {
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
  restaurantsRootSelector,
  (_, id) => id,
  ({ details }, id) => details[id],
);
