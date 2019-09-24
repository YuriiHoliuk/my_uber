import { combineReducers } from 'redux';
import { loader } from './reducers/loader';
import { restaurantsList } from './reducers/restaurantsList';
import { restaurantsDetails } from './reducers/restaurantsDetails';

export const rootReducer = combineReducers({
  loader,
  restaurantsList,
  restaurantsDetails,
});
