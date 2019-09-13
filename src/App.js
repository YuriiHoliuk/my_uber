/* eslint-disable max-len */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import RestaurantsList from './components/RestaurantsList';
import Header from './components/Header/Header';
import { store } from './store';
import { Footer } from './components/Footer/Footer';
import RestaurantPage from './components/RestaurantPage';

// class App extends Component {
//
// }

const App = () => (
  <div className="wrapper">
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/" component={RestaurantsList} />
        <Route exact path="/:id" component={RestaurantPage} />
        <Footer />
      </Router>
    </Provider>
  </div>
);

export default App;
