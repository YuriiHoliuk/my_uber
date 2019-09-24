import { createReducer } from '../../utils/redux';
import { SET_RESTAURANTS_ERROR, SET_RESTAURANTS } from '../types';

export const REDUCER_NAME = 'restaurantsList';

export const restaurantsList = createReducer({
  [SET_RESTAURANTS]: (state, { payload }) => ({
    ...state,
    listData: payload,
    isLoaded: true,
    error: null,
  }),
  [SET_RESTAURANTS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
},
{
  listData: null,
  isLoaded: false,
  error: null,
});
