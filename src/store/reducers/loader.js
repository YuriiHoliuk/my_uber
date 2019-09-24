import { createReducer } from '../../utils/redux';
import { START_LOADING, STOP_LOADING } from '../types';

export const REDUCER_NAME = 'loader';

export const loader = createReducer({
  [START_LOADING]: state => ({
    ...state,
    isLoading: true,
  }),
  [STOP_LOADING]: state => ({
    ...state,
    isLoading: false,
  }),
},
{
  isLoading: false,
});
