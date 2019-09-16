import React from 'react';
import PropTypes from 'prop-types';
import './Badge.scss';

export const Badge = ({ children }) => (
  <span className="badge">
    {children}
  </span>
);

Badge.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.element,
  ]),
};

Badge.defaultProps = {
  children: null,
};
