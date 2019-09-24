import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RestaurantPage } from './RestaurantPage';
import {
  selectIsLoading,
  selectRestaurantDetails, selectRestaurantDetailsError,
} from '../../store/selectors';
import { loadRestaurantDetails } from '../../store/actions';

const Enhanced = withRouter(connect(
  (state, { match }) => ({
    restaurant: selectRestaurantDetails(state, match.params.id),
    isLoading: selectIsLoading(state),
    error: selectRestaurantDetailsError(state),
  }),
  { loadRestaurantDetails }
)(RestaurantPage));

export {
  Enhanced as RestaurantPage,
};
