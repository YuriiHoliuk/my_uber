import React from 'react';
import PropTypes from 'prop-types';
import './MenuItemCard.scss';

export const MenuItemCard = (props) => {
  const {
    imageUrl,
    title,
    price,
    description,
  } = props;

  return (
    <li className="menu-item-card">
      <div className="menu-item-card__info">
        <h3 className="menu-item-card__title">{title}</h3>
        <p className="menu-item-card__description">{description}</p>
        <p className="menu-item-card__price">{price}</p>
      </div>
      <img src={imageUrl} alt={title} className="menu-item-card__img" />
    </li>
  );
};

MenuItemCard.propTypes = {
  uuid: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
};

MenuItemCard.defaultProps = {
  description: '',
};
