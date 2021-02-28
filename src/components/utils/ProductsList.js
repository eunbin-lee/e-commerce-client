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
            {product.image && (
              <img
                src={product.image}
                style={{ width: '300px', height: '370px' }}
              />
            )}
            {product.name && (
              <p
                style={{
                  marginTop: '0.75rem',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  color: 'rgba(0,0,0,0.65)',
                }}
              >
                {product.name}
              </p>
            )}
            {product.price && (
              <p
                style={{
                  marginTop: '-0.5rem',
                  fontSize: '1rem',
                  color: 'rgba(0,0,0,0.65)',
                }}
              >
                {product.price}
              </p>
            )}
            {product.text && (
              <p
                style={{
                  marginTop: '-0.5rem',
                  fontSize: '1rem',
                  color: 'rgba(0,0,0,0.65)',
                }}
              >
                {product.text}
              </p>
            )}
            {product.discount && (
              <div>
                <span
                  style={{
                    fontSize: '1rem',
                    color: '#fa5252',
                    fontWeight: 'bold',
                  }}
                >
                  {product.discountRate} &nbsp;
                </span>
                <span style={{ fontSize: '1rem', color: 'rgba(0,0,0,0.65)' }}>
                  {product.discount}
                </span>
                <span
                  style={{
                    display: 'block',
                    marginTop: '0.15rem',
                    color: '#868e96',
                    textDecoration: 'line-through',
                  }}
                >
                  {product.cost}
                </span>
              </div>
            )}
            {product.likes && (
              <div>
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
              </div>
            )}
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default CreateProducts;
