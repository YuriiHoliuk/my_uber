/* eslint-disable max-len */
import React from 'react';
import './App.scss';
import RestaurantsList from './components/RestaurantsList/RestaurantsList';
import data from './ChIJdd4hrwug2EcRmSrV3Vo6llI';
import { DEFAULT_ETA_RANGE } from './constants/defaults';
import Header from './components/Header/Header';

const { data: { feedItems, storesMap } } = data;

const App = () => {
  const mappedRestaurants = feedItems.map(({ uuid }) => {
    const {
      title,
      categories,
      etaRange,
      heroImageUrl,
    } = storesMap[uuid];

    return {
      title,
      categories,
      etaRange: etaRange ? etaRange.text : DEFAULT_ETA_RANGE,
      imgUrl: heroImageUrl,
    };
  });

  return (
    <>
      <Header />
      <RestaurantsList
        restaurants={mappedRestaurants}
      />
    </>
  );
};

export default App;
