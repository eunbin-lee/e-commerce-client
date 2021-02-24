import React from 'react';

function CreateProducts({ products }) {
  return (
    <>
      {products.map((product) => (
        <div
          key={product.id}
          style={{ width: '320px', margin: '0 5px 50px', cursor: 'pointer' }}
        >
          <img
            src={product.image}
            style={{ width: '320px', height: '400px' }}
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
        </div>
      ))}
    </>
  );
}

export default CreateProducts;
