import React from 'react';
import PropTypes from 'prop-types';
import './MenuSections.scss';
import { MenuSection } from '../MenuSection';

export const MenuSections = (props) => {
  const { sections, entitiesMap } = props;

  return (
    <div className="menu-sections">
      <div className="content">
        {sections.map(({ uuid, title, itemUuids }) => (
          <MenuSection
            key={uuid}
            uuid={uuid}
            title={title}
            items={itemUuids.map(itemUUid => entitiesMap[itemUUid])}
          />
        ))}
      </div>
    </div>
  );
};

MenuSections.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.shape({
    uuid: PropTypes.string,
    title: PropTypes.string,
    itemUuids: PropTypes.arrayOf(PropTypes.string),
  })),
  entitiesMap: PropTypes.shape({}),
};

MenuSections.defaultProps = {
  sections: [],
  entitiesMap: {},
};
