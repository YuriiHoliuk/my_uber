import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Header.scss';
import ExtendableInput from '../ExtendableInput/ExtendableInput';

class Header extends Component {
  state = {
    location: '',
    search: '',
    time: '',
    isSticky: false,
    height: 0,
  };

  containerRef = createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.manageSticky);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.manageSticky);
  }

  manageSticky = () => {
    const y = window.scrollY;
    const { isSticky } = this.state;

    if (y !== 0 && !isSticky) {
      const { height } = this.containerRef.current.getBoundingClientRect();

      this.setState({ isSticky: true, height });
    } else if (y === 0 && isSticky) {
      this.setState({ isSticky: false, height: 0 });
    }
  };

  render() {
    const {
      location,
      search,
      time,
      isSticky,
      height,
    } = this.state;
    // eslint-disable-next-line max-len
    const containerClass = `header__container ${isSticky ? 'header__container--sticky' : ''}`;

    return (
      <>
        <div className={containerClass} ref={this.containerRef}>
          <div className="content">
            <header className="header">
              <Link to="/">
                <img
                  className="header__logo"
                  src="./images/logo.svg"
                  alt="Uber Eats"
                />
              </Link>

              <div className="header__delivery-info delivery-info">
                <ExtendableInput
                  name="location"
                  onChange={value => this.setState({ location: value })}
                  placeholder="Where we should deliver?"
                  buttonText="Deliver address"
                  iconUrl="./images/place.svg"
                  value={location}
                />

                <ExtendableInput
                  name="time"
                  onChange={value => this.setState({ time: value })}
                  iconUrl="./images/clock.svg"
                  buttonText="Deliver time"
                  value={time}
                  type="time"
                />
              </div>

              <ExtendableInput
                name="search"
                onChange={value => this.setState({ search: value })}
                placeholder="What are you craving?"
                buttonText="Search"
                iconUrl="./images/search.svg"
                value={search}
                className="header__search"
              />

              <button type="button" className="header__btn">
                Sign in
              </button>
            </header>
          </div>
        </div>
        <div
          className="header__placeholder"
          style={{ height }}
        />
      </>
    );
  }
}

Header.propTypes = {

};

export default Header;
