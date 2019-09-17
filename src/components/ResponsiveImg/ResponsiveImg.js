import React from 'react';
import PropTypes from 'prop-types';
import './ResponsiveImg.scss';

export const ResponsiveImg = (props) => {
  const { imageUrls, alt, className } = props;
  const maxSizeImg = imageUrls.reduce((acc, imgData) => (
    imgData.width > acc.width
      ? imgData
      : acc
  ));
  const srcSet = imageUrls
    .map(({ width, url }) => `${url} ${width}w`)
    .join(',\n');

  return (
    <img
      srcSet={srcSet}
      src={maxSizeImg.url}
      alt={alt}
      className={className}
    />
  );
};

ResponsiveImg.propTypes = {
  imageUrls: PropTypes.arrayOf(PropTypes.shape({
    width: PropTypes.number,
    url: PropTypes.string,
  })).isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
};

ResponsiveImg.defaultProps = {
  alt: '',
  className: '',
};
