import React from 'react';
import PropTypes from 'prop-types';
import './MenuSection.scss';
import { MenuItemCard } from '../MenuItemCard';

export const MenuSection = (props) => {
  const { title, uuid, items } = props;

  return (
    <section className="menu-section">
      <h2 className="menu-section__title" id={uuid}>{title}</h2>

      <ul className="cards-grid">
        {items.map(item => (
          <MenuItemCard key={item.uuid} {...item} />
        ))}
      </ul>
    </section>
  );
};

MenuSection.propTypes = {
  title: PropTypes.string.isRequired,
  uuid: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  })).isRequired,
};
