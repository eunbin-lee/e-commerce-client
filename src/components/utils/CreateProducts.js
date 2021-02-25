import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

function CreateProducts({ products }) {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}
    >
      {products.map((product) => (
        <Link to="/product/:productId">
          <li
            key={product.id}
            style={{ width: '300px', margin: '0 5px 60px', cursor: 'pointer' }}
          >
            <img
              src={product.image}
              style={{ width: '300px', height: '380px' }}
            />
            <p
              style={{
                marginTop: '0.75rem',
                fontSize: '1.15rem',
                color: 'rgba(0,0,0,0.65)',
              }}
            >
              {product.name}
            </p>
            <p
              style={{
                marginTop: '-0.5rem',
                fontSize: '1.1rem',
                color: 'rgba(0,0,0,0.65)',
              }}
            >
              {product.price}
            </p>
            <div
              style={{
                marginTop: '2rem',
                fontSize: '1rem',
                color: 'rgba(0,0,0,0.65)',
              }}
            >
              <span style={{ marginRight: '1rem' }}>
                <Icon type="heart" /> {product.likes}
              </span>
              <span>
                <Icon type="message" /> {product.reviews}
              </span>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default CreateProducts;
