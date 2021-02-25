import React, { useEffect, useState } from 'react';
import { Button, Descriptions, Select, Icon } from 'antd';

function ProductInfo(props) {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  const addToCarthandler = () => {
    props.addToCart(props.detail._id);
  };

  const { Option } = Select;

  //상품 수량
  const [quantity, setQuantity] = useState(1);
  const onIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const onDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
      {/* <Descriptions title="PRODUCT">
        <Descriptions.Item label="Price" span={3}>
          {' '}
          {Product.price}
        </Descriptions.Item>
        <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
        <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {' '}
          {Product.description}
        </Descriptions.Item>
      </Descriptions> */}

      <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', padding: '0 8px' }}>
        PRODUCT {Product.title}
      </h3>
      <table style={{ border: 'hidden', marginTop: '30px' }}>
        <tr>
          <td colSpan="2" style={{ fontSize: '1rem', padding: '0 8px 40px' }}>
            {Product.price} 00000￦
          </td>
        </tr>
        <tr
          style={{
            backgroundColor: '#fff',
            border: 'hidden',
          }}
        >
          <td style={{ border: 'hidden', width: '65%' }}>
            <Select defaultValue="option" style={{ width: '100%' }}>
              <Option value="option">- Please select option -</Option>
              <Option value="option1">option1</Option>
              <Option value="option2">option2</Option>
              <Option value="option3">option3</Option>
            </Select>
          </td>
          <td style={{ borderSpacing: '0' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5.5px',
                border: '1px solid #dee2e6',
              }}
            >
              <Icon
                type="minus"
                style={{ cursor: 'pointer' }}
                onClick={onDecreaseQuantity}
              />
              <input
                type="text"
                value={quantity}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  border: 'none',
                  margin: '0 10px',
                }}
              />
              <Icon
                type="plus"
                style={{ cursor: 'pointer' }}
                onClick={onIncreaseQuantity}
              />
            </div>
          </td>
        </tr>
        <tr>
          <td colSpan="2" style={{ border: 'hidden' }}>
            Show selected option
          </td>
        </tr>
        <tr style={{ backgroundColor: '#fff' }}>
          <td colSpan="2" style={{ paddingTop: '25px', textAlign: 'right' }}>
            Total Price
          </td>
        </tr>
        <tr style={{ backgroundColor: '#fff' }}>
          <td colSpan="2" style={{ border: 'hidden' }}>
            <Button
              size="large"
              type="primary"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              Buy Now
            </Button>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '5px 0',
              }}
            >
              <Button
                size="large"
                style={{ width: '50%', marginRight: '5px' }}
                onClick={addToCarthandler}
              >
                Add to Cart
              </Button>
              <Button size="large" style={{ width: '50%' }}>
                Wish List
              </Button>
            </div>
          </td>
        </tr>
        <tr style={{ backgroundColor: '#fff' }}>
          <td colSpan="2">
            <div
              style={{
                marginTop: '10px',
                borderTop: '1px solid #dee2e6',
              }}
            >
              <div
                style={{
                  padding: '12px 5px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Product Information
              </div>

              <div>- This product is really good and ...</div>
              <div>- This product is really good and ...</div>
              <div>- This product is really good and ...</div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default ProductInfo;
