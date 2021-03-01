import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Checkbox, Icon } from 'antd';

const MyCartPage = () => {
  const imageUrl =
    'https://www.kingplastic.com/wp-content/uploads/2014/12/Charcoal-Gray-300x300.jpg';
  const [myCart, setMyCart] = useState([
    {
      no: 1,
      image: imageUrl,
      name: 'product1',
      option: 'option1',
      quantity: 1,
      price: 30000,
      delivery: 2500,
      checked: false,
    },
    {
      no: 2,
      image: imageUrl,
      name: 'product2',
      option: 'option3',
      quantity: 2,
      price: 20000,
      delivery: 2500,
      checked: false,
    },
  ]);

  //styled-components
  const Table = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    font-size: 1.1rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: -1px;
  `;
  const TableRow = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
    font-size: 1rem;
    letter-spacing: -1px;
    border-top: 1px solid #adb5bd;
    p {
      margin: 0;
      padding: 0;
    }
  `;

  //상품 전체 선택
  const onSelectAll = () => {
    setMyCart(myCart.map((item) => ({ ...item, checked: true })));
  };
  //상품 개별 선택
  const onSelectItem = (no) => {
    setMyCart(
      myCart.map((item) =>
        item.no === no ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  //상품 수량
  const onIncrease = (no) => {
    setMyCart(
      myCart.map((item) =>
        item.no === no ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const onDecrease = (no) => {
    setMyCart(
      myCart.map((item) =>
        item.no === no ? { ...item, quantity: item.quantity - 1 } : item,
      ),
    );
  };

  return (
    <div style={{ width: '75%', margin: '3rem auto' }}>
      <h2>Cart</h2>

      <div
        style={{
          borderTop: '3px solid #343a40',
          borderBottom: '1px solid #343a40',
        }}
      >
        <Table>
          <Checkbox style={{ width: '7%' }} onClick={onSelectAll} />
          <div style={{ width: '48%' }}>상품 정보</div>
          <div style={{ width: '15%' }}>수량</div>
          <div style={{ width: '15%' }}>주문금액</div>
          <div style={{ width: '15%' }}>배송비</div>
        </Table>
        {myCart.map((item) => (
          <>
            <TableRow>
              <Checkbox
                style={{ width: '7%', textAlign: 'center' }}
                checked={item.checked}
                onClick={() => onSelectItem(item.no)}
              />
              <div
                style={{ width: '48%', display: 'flex', alignItems: 'center' }}
              >
                <img src={item.image} width="100px" height="100px" />
                <div style={{ marginLeft: '15px' }}>
                  <p style={{ fontWeight: 'bold' }}>{item.name}</p>
                  <p style={{ fontSize: '0.9rem', color: '#868e96' }}>
                    옵션 : {item.option}
                  </p>
                </div>
              </div>
              <div
                style={{
                  width: '15%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '0.8rem',
                }}
              >
                <Icon
                  type="minus"
                  style={{ cursor: 'pointer' }}
                  onClick={() => onDecrease(item.no)}
                />
                <input
                  type="text"
                  value={item.quantity}
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
                  onClick={() => onIncrease(item.no)}
                />
              </div>
              <div style={{ width: '15%', textAlign: 'center' }}>
                <p>{item.price}원</p>
                <p
                  style={{
                    marginTop: '5px',
                    fontSize: '0.8rem',
                    color: '#adb5bd',
                  }}
                >
                  적립금 {item.price * 0.01}
                </p>
              </div>
              <div style={{ width: '15%', textAlign: 'center' }}>
                <p>{item.delivery}원</p>
                <p style={{ marginTop: '5px', fontSize: '0.95rem' }}>조건</p>
              </div>
            </TableRow>
          </>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '20px 0',
        }}
      >
        <Button>선택상품 삭제</Button>
        <Button style={{ marginLeft: '5px' }}>선택상품 계산</Button>
      </div>

      <div
        style={{
          marginTop: '100px',
          borderTop: '3px solid #343a40',
          borderBottom: '1px solid #343a40',
        }}
      >
        <Table style={{ justifyContent: 'space-around' }}>
          <div>총 주문금액</div>
          <div>총 배송비</div>
          <div>총 결제금액</div>
        </Table>
        <TableRow
          style={{
            padding: '30px 0',
            textAlign: 'center',
            fontSize: '1.25rem',
            fontWeight: 'bold',
            letterSpacing: '-0.5px',
          }}
        >
          <div style={{ width: '32.6%' }}>
            <p>50,000원</p>
            <p
              style={{
                fontSize: '0.85rem',
                fontWeight: 'normal',
                color: '#adb5bd',
              }}
            >
              총 2개
            </p>
          </div>
          <Icon type="plus" style={{ width: '1%' }} />
          <div style={{ width: '32.6%' }}>2,500원</div>
          <Icon
            type="pause"
            style={{ width: '1%', transform: 'rotate(90deg)' }}
          />
          <div style={{ width: '32.6%' }}>52,500원</div>
        </TableRow>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '50px 0 100px',
        }}
      >
        <Button
          type="primary"
          style={{
            height: 'unset',
            margin: '0 2.5px',
            padding: '10px 25px',
            fontSize: '1.1rem',
          }}
        >
          전체상품 주문
        </Button>
        <Button
          style={{
            height: 'unset',
            margin: '0 2.5px',
            padding: '10px 25px',
            fontSize: '1.1rem',
          }}
        >
          선택상품 주문
        </Button>
      </div>
    </div>
  );
};

export default MyCartPage;
