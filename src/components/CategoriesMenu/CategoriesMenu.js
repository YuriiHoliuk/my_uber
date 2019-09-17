import React from 'react';
import PropTypes from 'prop-types';
import './CategoriesMenu.scss';

export const CategoriesMenu = (props) => {
  const { list } = props;

  return (
    <div className="categories-menu">
      <div className="content">
        <ul className="categories-menu__list">
          {list.map(({ title, uuid }) => (
            <li key={uuid} className="categories-menu__item">
              <a
                href={`#${uuid}`}
                className="categories-menu__link"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CategoriesMenu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})),
};

CategoriesMenu.defaultProps = {
  list: [],
};
