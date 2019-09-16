import { createReducer } from '../utils/redux';
import { SET_RESTAURANT_DETAILS, SET_RESTAURANTS } from './types';

const initialState = {
  listData: null,
  details: {},
};

const actionHandlers = {
  [SET_RESTAURANTS]: (state, { payload }) => ({
    ...state,
    listData: payload,
  }),
  [SET_RESTAURANT_DETAILS]: (state, { payload }) => ({
    ...state,
    details: {
      ...state.details,
      [payload.uuid]: payload,
    },
  }),
};

export const rootReducer = createReducer(actionHandlers, initialState);
