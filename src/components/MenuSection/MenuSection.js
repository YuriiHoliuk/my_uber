import React from 'react';
import PropTypes from 'prop-types';
import './MenuSection.scss';
import { MenuItemCard } from '../MenuItemCard';

export const MenuSection = (props) => {
  const { title, uuid, items } = props;

  return (
    <div className="menu-section">
      <h2 className="menu-section__title" id={uuid}>{title}</h2>

      <ul className="menu-section__cards">
        {items.map(item => (
          <div key={item.uuid} style={{ width: '100%' }}>
            <MenuItemCard {...item} />
          </div>
        ))}
      </ul>
    </div>
  );
};

MenuSection.propTypes = {
  title: PropTypes.string,
  uuid: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    description: PropTypes.string,
  })),
};

MenuSection.defaultProps = {

};
