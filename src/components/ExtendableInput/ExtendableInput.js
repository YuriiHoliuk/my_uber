import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import './ExtendableInput.scss';
import { onEnter } from '../../utils/events';

class ExtendableInput extends Component {
  state = {
    extended: false,
  };

  inputRef = createRef();

  componentWillUnmount() {
    this.unListenClickOutside();
  }

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
    if (this.state.extended) {
      return;
    }

    this.setState(
      { extended: true },
      () => {
        this.inputRef.current.focus();
        setTimeout(this.listenClickOutside);
      },
    );
  };

  clear = () => {
    this.props.onChange('');
  };

  onEnter = () => {
    this.props.onChange(this.inputRef.current.value);
    this.close();
  };

  render() {
    const {
      iconUrl,
      onChange,
      buttonText,
      placeholder,
      name,
      value,
      type,
      className,
    } = this.props;
    const { extended } = this.state;
    // eslint-disable-next-line max-len
    const rootClass = `${className} extendable-input${extended ? ' extendable-input--extended' : ''}`;

    return (
      <div
        className={rootClass}
        onClick={this.open}
        role="button"
        tabIndex={0}
        onKeyDown={onEnter(this.open)}
        onFocus={this.open}
      >
        {iconUrl && (
          <img
            className="extendable-input__icon"
            src={iconUrl}
            alt="input icon"
          />
        )}

        {!extended && (
          <span className="extendable-input__btn">
            {value || buttonText}
          </span>
        )}

        {extended && (
          <>
            <input
              name={name}
              ref={this.inputRef}
              className="extendable-input__input"
              type={type}
              placeholder={placeholder}
              onChange={({ target }) => onChange(target.value)}
              value={value}
              onKeyDown={onEnter(this.onEnter)}
            />
            {value && (
              <button
                className="extendable-input__clear-btn"
                type="button"
                onClick={this.clear}
              >
                Clear
              </button>
            )}
            <span className="extendable-input__separator" />
            <button type="button" onClick={this.close}>
              <img
                className="extendable-input__close-icon"
                src="./images/close-button.svg"
                alt="close"
              />
            </button>
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
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

ExtendableInput.defaultProps = {
  iconUrl: null,
  onChange: () => {},
  buttonText: '',
  placeholder: '',
  value: '',
  type: 'text',
  className: '',
};

export default ExtendableInput;
