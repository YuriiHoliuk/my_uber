import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { RestaurantsListPage } from './components/RestaurantsListPage';
import { Header } from './components/Header';
import { store } from './store';
import { RestaurantPage } from './components/RestaurantPage';
import { Footer } from './components/Footer';

export const App = () => (
  <Provider store={store}>
    <Router>
      <Header />
      <Route exact path="/" component={RestaurantsListPage} />
      <Route exact path="/:id" component={RestaurantPage} />
      <Footer />
    </Router>
  </Provider>
);
