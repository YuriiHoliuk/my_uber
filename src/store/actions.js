import { SET_RESTAURANT_DETAILS, SET_RESTAURANTS } from './types';
import { createAction } from '../utils/redux';
import { api } from '../utils/api';

const setRestaurants = createAction(SET_RESTAURANTS);
const setRestaurantDetails = createAction(SET_RESTAURANT_DETAILS);

export const loadRestaurants = (city = 'london') => async(dispatch) => {
  const data = await api.get('restaurants', { city });

  dispatch(setRestaurants(data));
};

export const loadRestaurantDetails = id => async(dispatch) => {
  const data = await api.get(`restaurants/${id}`);

  dispatch(setRestaurantDetails(data));
};
