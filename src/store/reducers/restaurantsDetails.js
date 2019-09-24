import { createReducer } from '../../utils/redux';
import { SET_RESTAURANT_DETAILS, SET_RESTAURANT_DETAILS_ERROR } from '../types';

export const REDUCER_NAME = 'restaurantsDetails';

export const restaurantsDetails = createReducer({
  [SET_RESTAURANT_DETAILS]: (state, { payload }) => ({
    ...state,
    byId: {
      ...state.byId,
      [payload.uuid]: payload,
    },
    error: null,
  }),
  [SET_RESTAURANT_DETAILS_ERROR]: (state, { payload }) => ({
    ...state,
    error: payload,
  }),
},
{
  byId: {},
  error: null,
});
