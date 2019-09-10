import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import ExtendableInput from '../ExtendableInput/ExtendableInput';

const Header = props => (
  <div className="content">
    <header className="header">
      <img className="header__logo" src="./images/logo.svg" alt="Uber Eats" />

      <div className="header__delivery-info delivery-info">
        <ExtendableInput
          name="location"
          onChange={console.log}
          placeholder="Where we should deliver?"
          buttonText="Deliver address"
          iconUrl="./images/place.svg"
        />
        <div className="delivery-info__location">
          <img src="./images/place.svg" alt="place pin icon" />
          <input type="text" name="location" />
        </div>

        <div className="delivery-info__time">
          <img src="./images/clock.svg" alt="clock icon" />
          <input type="time" name="time" />
        </div>
      </div>
      <div className="search">
        <img src="./images/search.svg" alt="search icon" />
        <input type="text" placeholder="Search" name="search" />
      </div>
      <button type="button" className="sign-in__btn">
          Sign in
      </button>
    </header>
  </div>
);

Header.propTypes = {

};

export default Header;
