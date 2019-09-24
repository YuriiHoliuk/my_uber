import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import {
  selectIsLoading,
  selectRestaurants,
  selectRestaurantsError,
  selectRestaurantsLoaded,
} from '../../store/selectors';

const Enhanced = connect(state => ({
  restaurants: selectRestaurants(state),
  isLoading: selectIsLoading(state),
  error: selectRestaurantsError(state),
  isLoaded: selectRestaurantsLoaded(state),
}), { loadRestaurants })(RestaurantsListPage);

export {
  Enhanced as RestaurantsListPage,
};
