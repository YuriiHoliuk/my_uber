import { connect } from 'react-redux';
import RestaurantsList from './RestaurantsList';
import { loadRestaurants } from '../../store/actions';
import { selectRestaurants } from '../../store/selectors';

export default connect(state => ({
  restaurants: selectRestaurants(state),
}), { loadRestaurants })(RestaurantsList);
