import React, { useState } from 'react';
import './ProductDetails.css';

function ProductDetails() {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: 'Details',
      content: 'Detailed Description',
      selected: true,
    },
    { id: 2, title: 'Related', content: 'Related Products', selected: false },
    { id: 3, title: 'Reviews', content: 'Reviews', selected: false },
    { id: 4, title: 'Q & A', content: 'Q & A', selected: false },
  ]);

  const onClick = (id) => {
    setTabs(
      tabs.map((tab) =>
        tab.id === id
          ? { ...tab, selected: true }
          : { ...tab, selected: false },
      ),
    );
  };

  return (
    <>
      <div className="tabs_box" style={{ paddingTop: '3px' }}>
        <ul className="tabs_list">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={`tab ${tab.selected ? 'on' : 'off'}`}
              onClick={() => onClick(tab.id)}
            >
              {tab.title}
            </li>
          ))}
        </ul>
        {tabs.map((tab) => (
          <div key={tab.id}>{tab.selected ? tab.content : null}</div>
        ))}
      </div>
    </>
  );
}

export default ProductDetails;
