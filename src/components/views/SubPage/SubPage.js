import React from 'react';
import { Icon, Select } from 'antd';

function SubPage() {
  const { Option } = Select;

  // 베스트 상품 목록
  const bestProducts = [];
  const createProducts = () => {
    for (let i = 1; i <= 20; i++) {
      bestProducts.push({
        id: i,
        image: `https://www.kingplastic.com/wp-content/uploads/2014/12/Charcoal-Gray-300x300.jpg`,
        name: `Best Product${i}`,
        price: `00000￦`,
        likes: `234`,
        reviews: `10`,
      });
    }
    return bestProducts;
  };
  createProducts();

  return (
    <div
      style={{
        width: '80%',
        margin: '0 auto',
        marginTop: '-6px',
      }}
    >
      <h2 style={{ margin: '50px 5px 30px' }}>Best</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '20px 5px',
        }}
      >
        <Select defaultValue="recommendation_order" style={{ width: '150px' }}>
          <Option value="recommendation_order">추천순</Option>
          <Option value="new_product_order">신상품순</Option>
          <Option value="low_price_order">낮은가격순</Option>
          <Option value="high_price_order">높은가격순</Option>
          <Option value="best_likes_order">베스트하트순</Option>
          <Option value="best_review_order">베스트리뷰순</Option>
        </Select>
      </div>

      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}
      >
        {bestProducts.map((product) => (
          <li
            key={product.id}
            style={{ width: '320px', margin: '0 5px 50px', cursor: 'pointer' }}
          >
            <img
              src={product.image}
              style={{ width: '320px', height: '400px' }}
            />
            <p style={{ marginTop: '0.75rem', fontSize: '1.2rem' }}>
              {product.name}
            </p>
            <p style={{ marginTop: '-0.5rem', fontSize: '1.15rem' }}>
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
      </ul>

      <div>
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            //   alignItems: 'center',
            marginTop: '70px',
          }}
        >
          <li>
            <a href="/">1</a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li>
            <a href="/">3</a>
          </li>
          <li>
            <a href="/">4</a>
          </li>
          <li>
            <a href="/">5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SubPage;
