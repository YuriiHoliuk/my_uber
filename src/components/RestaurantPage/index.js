import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RestaurantPage from './RestaurantPage';
import { selectRestaurantDetails } from '../../store/selectors';
import { loadRestaurantDetails } from '../../store/actions';

export default withRouter(connect(
  (state, { match }) => ({
    restaurant: selectRestaurantDetails(state, match.params.id),
  }),
  { loadRestaurantDetails }
)(RestaurantPage));
