import {
  SET_RESTAURANT_DETAILS,
  SET_RESTAURANT_DETAILS_ERROR,
  SET_RESTAURANTS,
  SET_RESTAURANTS_ERROR,
  START_LOADING, STOP_LOADING,
} from './types';
import { createAction } from '../utils/redux';
import { api } from '../utils/api';

const setRestaurants = createAction(SET_RESTAURANTS);
const setRestaurantsError = createAction(SET_RESTAURANTS_ERROR);
const setRestaurantDetails = createAction(SET_RESTAURANT_DETAILS);
const setRestaurantDetailsError = createAction(SET_RESTAURANT_DETAILS_ERROR);

const startLoading = createAction(START_LOADING);
const stopLoading = createAction(STOP_LOADING);

export const loadRestaurants = (city = 'london') => async(dispatch) => {
  dispatch(startLoading());

  try {
    const data = await api.get('restaurants', { city });

    dispatch(setRestaurants(data));
  } catch (error) {
    dispatch(setRestaurantsError('Cannot load restaurants'));
  } finally {
    dispatch(stopLoading());
  }
};

export const loadRestaurantDetails = id => async(dispatch) => {
  dispatch(startLoading());

  try {
    const data = await api.get(`restaurants/${id}`);

    dispatch(setRestaurantDetails(data));
  } catch (error) {
    dispatch(setRestaurantDetailsError('Cannot load restaurant details'));
  } finally {
    dispatch(stopLoading());
  }
};
