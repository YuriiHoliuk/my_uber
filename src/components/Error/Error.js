import React from 'react';
import PropTypes from 'prop-types';
import './Error.scss';

export const Error = ({ errorMessage }) => (
  <div className="error">
    <div className="error__text">
      {errorMessage}
      😞
    </div>
    <a href="/" className="error__link">
      Go to Home
    </a>
  </div>
);

Error.propTypes = {
  errorMessage: PropTypes.string,
};

Error.defaultProps = {
  errorMessage: 'Something went wrong',
};
