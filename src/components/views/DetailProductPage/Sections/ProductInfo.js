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

  //상품 옵션
  const { Option } = Select;
  const optionList = [
    { id: 1, title: 'option1', quantity: 1 },
    { id: 2, title: 'option2', quantity: 1 },
    { id: 3, title: 'option3', quantity: 1 },
  ];
  const [options, setOptions] = useState([]);
  const onClick = (id) => {
    if (options.find((option) => option.id === id)) {
      return alert('이미 선택한 옵션입니다.');
    }
    setOptions(options.concat(optionList[id - 1]));
  };
  const onRemove = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  //상품 수량
  const onIncrease = (id) => {
    setOptions(
      options.map((option) =>
        option.id === id
          ? { ...option, quantity: option.quantity + 1 }
          : option,
      ),
    );
  };
  const onDecrease = (id) => {
    setOptions(
      options.map((option) =>
        option.id === id
          ? { ...option, quantity: option.quantity - 1 }
          : option,
      ),
    );
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
        <tr style={{ backgroundColor: '#fff' }}>
          <td colSpan="2" style={{ border: 'hidden' }}>
            <Select defaultValue="option" style={{ width: '100%' }}>
              <Option value="option">- Please select option -</Option>
              {optionList.map((option) => (
                <Option value={option.title} onClick={() => onClick(option.id)}>
                  {option.title}
                </Option>
              ))}
            </Select>
          </td>
        </tr>
        {options.map((option) => (
          <tr style={{ backgroundColor: '#fff' }}>
            <td style={{ border: 'hidden' }}>
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  paddingBottom: '5px',
                  borderBottom: '1px solid #dee2e6',
                  fontSize: '0.8rem',
                }}
              >
                <div style={{ width: '78%', paddingLeft: '20px' }}>
                  {option.title}
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                    fontSize: '0.7rem',
                  }}
                >
                  <Icon
                    type="minus"
                    style={{ cursor: 'pointer' }}
                    onClick={() => onDecrease(option.id)}
                  />
                  <input
                    type="text"
                    value={option.quantity}
                    style={{
                      width: '30px',
                      textAlign: 'center',
                      border: 'none',
                      margin: '0 5px',
                    }}
                  />
                  <Icon
                    type="plus"
                    style={{ cursor: 'pointer' }}
                    onClick={() => onIncrease(option.id)}
                  />
                </div>
                <div
                  style={{
                    width: '10%',
                    textAlign: 'center',
                    fontSize: '0.8rem',
                  }}
                >
                  <Icon
                    type="close-square"
                    style={{ cursor: 'pointer' }}
                    onClick={() => onRemove(option.id)}
                  />
                </div>
              </div>
            </td>
          </tr>
        ))}
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
