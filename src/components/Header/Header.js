import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { Control } from '../Control';

export class Header extends Component {
  state = {
    location: '',
    search: '',
    time: '',
    shouldShowMobileControls: false,
  };

  toggleControls = () => this.setState(({ shouldShowMobileControls }) => ({
    shouldShowMobileControls: !shouldShowMobileControls,
  }));

  render() {
    const {
      location,
      search,
      time,
      shouldShowMobileControls,
    } = this.state;

    return (
      <>
        <header className="header">
          <div className="content">
            <div className="header__inner">
              <Link to="/">
                <img
                  className="header__logo"
                  src="./images/logo.svg"
                  alt="Uber Eats"
                />
              </Link>

              <div
                className="header__delivery-info header__delivery-info--desktop"
              >
                <Control
                  name="time"
                  onChange={value => this.setState({ time: value })}
                  iconUrl="./images/clock.svg"
                  value={time}
                  type="time"
                />

                <Control
                  name="location"
                  onChange={value => this.setState({ location: value })}
                  placeholder="Choose address"
                  iconUrl="./images/place.svg"
                  value={location}
                />
              </div>

              <div
                className="header__delivery-info header__delivery-info--search"
              >
                <button
                  type="button"
                  className="header__btn header__btn--toggle"
                  onClick={this.toggleControls}
                >
                  <img
                    className="header__btn-image"
                    src="./images/place.svg"
                    alt="place point"
                  />
                </button>

                <Control
                  name="search"
                  onChange={value => this.setState({ search: value })}
                  placeholder="What are you craving?"
                  iconUrl="./images/search.svg"
                  value={search}
                />
              </div>

              <button type="button" className="header__btn">
                Sign in
              </button>
            </div>
            {shouldShowMobileControls && (
              <div
                className="header__delivery-info header__delivery-info--mobile"
              >
                <Control
                  name="time"
                  onChange={value => this.setState({ time: value })}
                  iconUrl="./images/clock.svg"
                  value={time}
                  type="time"
                  className="header__mobile-control"
                />

                <Control
                  name="location"
                  onChange={value => this.setState({ location: value })}
                  placeholder="Choose address"
                  iconUrl="./images/place.svg"
                  value={location}
                  className="header__mobile-control"
                />
              </div>
            )}
          </div>
        </header>
      </>
    );
  }
}
