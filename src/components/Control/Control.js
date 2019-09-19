import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import './Control.scss';

export class Control extends Component {
  state = {
    isFocused: false,
  };

  inputRef = createRef();

  handleFocus = () => this.setState({ isFocused: true });

  handleBlur = () => this.setState({ isFocused: false });

  focus = () => {
    this.inputRef.current && this.inputRef.current.focus();
  };

  render() {
    const {
      name,
      label,
      value,
      onChange,
      iconUrl,
      placeholder,
      className,
      type,
    } = this.props;
    const { isFocused } = this.state;

    const rootClass = `control ${className}`;
    // eslint-disable-next-line max-len
    const wrapperClass = `control__wrapper ${isFocused ? 'control__wrapper--focused' : ''}`;

    return (
      <div
        role="presentation"
        className={rootClass}
        onClick={this.focus}
      >
        <label htmlFor={name} className="control__label">
          {label}
        </label>
        <div className={wrapperClass}>
          {iconUrl && (
            <img className="control__icon" src={iconUrl} alt="input icon" />
          )}

          <input
            ref={this.inputRef}
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            type={type}
            className="control__input"
            onChange={({ target }) => onChange(target.value)}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
        </div>
      </div>
    );
  }
}

Control.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  label: PropTypes.string,
  iconUrl: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Control.defaultProps = {
  type: 'text',
  label: '',
  iconUrl: '',
  placeholder: '',
  className: '',
};
