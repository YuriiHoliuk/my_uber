import { connect } from 'react-redux';
import { RestaurantsListPage } from './RestaurantsListPage';
import { loadRestaurants } from '../../store/actions';
import { selectRestaurants } from '../../store/selectors';

const Enhanced = connect(state => ({
  restaurants: selectRestaurants(state),
}), { loadRestaurants })(RestaurantsListPage);

export {
  Enhanced as RestaurantsListPage,
};
