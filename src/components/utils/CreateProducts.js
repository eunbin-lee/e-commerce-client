import React from 'react';
import { Icon } from 'antd';

function CreateProducts({ products }) {
  return (
    <>
      {products.map((product) => (
        <li
          key={product.id}
          style={{ width: '300px', margin: '0 5px 60px', cursor: 'pointer' }}
        >
          <img
            src={product.image}
            style={{ width: '300px', height: '380px' }}
          />
          <p style={{ marginTop: '0.75rem', fontSize: '1.15rem' }}>
            {product.name}
          </p>
          <p style={{ marginTop: '-0.5rem', fontSize: '1.1rem' }}>
            {product.price}
          </p>
          <div style={{ marginTop: '2rem', fontSize: '1rem' }}>
            <span style={{ marginRight: '1rem' }}>
              <Icon type="heart" /> {product.likes}
            </span>
            <span>
              <Icon type="message" /> {product.reviews}
            </span>
          </div>
        </li>
      ))}
    </>
  );
}

export default CreateProducts;
