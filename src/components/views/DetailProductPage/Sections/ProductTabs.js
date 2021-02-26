import React from 'react';
import './ProductTabs.css';

function ProductTabs({ tabs, onSelect }) {
  return (
    <>
      <div className="tabs_box" style={{ paddingTop: '3px' }}>
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={tab.selected ? 'on' : 'off'}
              onClick={() => onSelect(tab.id)}
            >
              <a href={`#`}>{tab.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductTabs;
