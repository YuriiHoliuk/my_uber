import { createReducer } from '../../utils/redux';
import { SET_RESTAURANT_DETAILS, SET_RESTAURANTS } from '../types';

const initialState = {
  data: null,
  details: {},
};

const actionHandlers = {
  [SET_RESTAURANTS]: (state, { payload }) => ({
    ...state,
    data: payload,
  }),
  [SET_RESTAURANT_DETAILS]: (state, { payload }) => ({
    ...state,
    details: {
      ...state.details,
      [payload.uuid]: payload,
    },
  }),
};

const restaurants = createReducer(actionHandlers, initialState);

export default restaurants;
