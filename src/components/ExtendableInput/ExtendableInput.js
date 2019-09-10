import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import './ExtendableInput.scss';

class ExtendableInput extends Component {
  state = {
    extended: false,
  };

  inputRef = createRef();

  closeOnClickOutside = ({ target }) => {
    if (!target.closest('.extendable-input')) {
      this.close();
    }
  };

  listenClickOutside = () => {
    window.addEventListener('click', this.closeOnClickOutside);
  };

  unListenClickOutside = () => {
    window.removeEventListener('click', this.closeOnClickOutside);
  };

  close = () => {
    this.setState(
      { extended: false },
      this.unListenClickOutside,
    );
  };

  open = () => {
    this.setState(
      { extended: true },
      () => {
        this.inputRef.current.focus();
        setTimeout(this.listenClickOutside);
      },
    );
  };

  render() {
    const {
      iconUrl,
      onChange,
      buttonText,
      placeholder,
      name,
    } = this.props;
    const { extended } = this.state;
    // eslint-disable-next-line max-len
    const rootClass = `extendable-input${extended ? ' extendable-input--extended' : ''}`;

    return (
      <div className={rootClass}>
        {iconUrl && (
          <img
            className="extendable-input__icon"
            src={iconUrl}
            alt="input icon"
          />
        )}

        {!extended && (
          <button
            className="extendable-input__btn"
            type="button"
            onClick={this.open}
          >
            {buttonText}
          </button>
        )}

        {extended && (
          <>
            <input
              name={name}
              ref={this.inputRef}
              className="extendable-input__input"
              type="text"
              placeholder={placeholder}
              onChange={onChange}
            />
            <button type="button" onClick={this.close}>Close</button>
          </>
        )}
      </div>
    );
  }
}

ExtendableInput.propTypes = {
  name: PropTypes.string.isRequired,
  iconUrl: PropTypes.string,
  onChange: PropTypes.func,
  buttonText: PropTypes.string,
  placeholder: PropTypes.string,
};

ExtendableInput.defaultProps = {
  iconUrl: null,
  onChange: () => {},
  buttonText: '',
  placeholder: '',
};

export default ExtendableInput;
