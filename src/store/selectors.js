import { createSelector } from 'reselect';
import { DEFAULT_ETA_RANGE } from '../constants/defaults';
import { REDUCER_NAME as LOADER } from './reducers/loader';
import { REDUCER_NAME as LIST } from './reducers/restaurantsList';
import { REDUCER_NAME as DETAILS } from './reducers/restaurantsDetails';

const loaderRoot = state => state[LOADER];
const listRoot = state => state[LIST];
const detailsRoot = state => state[DETAILS];

export const selectIsLoading = createSelector(
  loaderRoot,
  ({ isLoading }) => isLoading,
);

export const selectRestaurantsError = createSelector(
  listRoot,
  ({ error }) => error,
);

export const selectRestaurantsLoaded = createSelector(
  listRoot,
  ({ isLoaded }) => isLoaded,
);

export const selectRestaurantDetailsError = createSelector(
  detailsRoot,
  ({ error }) => error,
);

export const selectRestaurants = createSelector(
  listRoot,
  ({ listData: data }) => {
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
        etaRange: etaRange ? etaRange.errorMessage : DEFAULT_ETA_RANGE,
        imageUrl: heroImageUrl,
      };
    });
  },
);

export const selectRestaurantDetails = createSelector(
  detailsRoot,
  (_, id) => id,
  ({ byId }, id) => {
    const restaurant = byId[id];

    if (!restaurant) {
      return null;
    }

    const {
      title,
      etaRange,
      categories,
      heroImageUrls,
      location: { address },
      sections: sectionIds,
      sectionsMap,
      entitiesMap,
    } = restaurant;
    const sections = sectionIds.map(sectionId => sectionsMap[sectionId]);

    return {
      title,
      categories,
      address,
      sections,
      entitiesMap,
      imageUrls: heroImageUrls,
      etaRange: etaRange ? etaRange.errorMessage : DEFAULT_ETA_RANGE,
    };
  },
);
