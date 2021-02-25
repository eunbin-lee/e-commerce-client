import React from 'react';
import './ProductTabs.css';

function ProductTabs({ tabs, onSelectTab }) {
  return (
    <>
      <div className="tabs_box" style={{ paddingTop: '3px' }}>
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={tab.selected ? 'on' : 'off'}
              onClick={() => onSelectTab(tab.id)}
            >
              <a href={`#tab${tab.id}`}>{tab.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default ProductTabs;
