import React from 'react';
import PropTypes from 'prop-types';
import './Select.scss';

export const Select = (props) => {
  const {
    options,
    onChange,
    value,
    name,
  } = props;

  return (
    <select
      name={name}
      className="select"
      onChange={onChange}
    >
      {options.map(({ value: optionValue, label }) => (
        <option value={optionValue} selected={value === optionValue}>
          {label}
        </option>
      ))}

    </select>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Select.defaultProps = {
  onChange: () => {},
  value: '',
};
