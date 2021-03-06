import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Checkbox, Select, Icon } from 'antd';

const MyCartPage = () => {
  const { Option } = Select;

  const imageUrl =
    'https://www.kingplastic.com/wp-content/uploads/2014/12/Charcoal-Gray-300x300.jpg';
  const [products, setProducts] = useState([
    {
      id: 1,
      image: imageUrl,
      name: 'product1',
      category: 'all',
      stock: 1000,
      option: ['option1', 'option2', 'option3'],
      price: 30000,
      discountRate: 10,
      delivery: 0,
      checked: false,
      recommendation: false,
      delete: false,
    },
    {
      id: 2,
      image: imageUrl,
      name: 'product2',
      category: 'best',
      stock: 1500,
      option: ['option1', 'option2', 'option3'],
      price: 25000,
      discountRate: 0,
      delivery: 0,
      checked: false,
      recommendation: false,
      delete: false,
    },
    {
      id: 3,
      image: imageUrl,
      name: 'product3',
      category: 'new',
      stock: 1000,
      option: ['option1', 'option2', 'option3'],
      price: 35000,
      delivery: 2500,
      checked: false,
      recommendation: true,
      delete: false,
    },
  ]);

  //styled-components
  const Table = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
    font-size: 1rem;
    font-weight: bold;
    text-align: center;
    letter-spacing: -1px;
  `;
  const TableRow = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
    font-size: 0.9rem;
    letter-spacing: -1px;
    border-top: 1px solid #adb5bd;
    p {
      margin: 0;
      padding: 0;
    }
  `;

  //상품 전체 선택
  const onSelectAll = () => {
    setProducts(products.map((product) => ({ ...product, checked: true })));
  };
  //상품 개별 선택
  const onSelectProduct = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, checked: !product.checked } : product,
      ),
    );
  };

  return (
    <div style={{ width: '75%', margin: '3rem auto' }}>
      <h2 style={{ fontWeight: 'bold' }}>판매자 상품 관리</h2>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '1rem 0',
        }}
      >
        <Select defaultValue="all" style={{ width: '150px' }}>
          <Option value="all">All</Option>
          <Option value="best">Best</Option>
          <Option value="new">New</Option>
          <Option value="discount">Discount</Option>
        </Select>
      </div>

      <div
        style={{
          borderTop: '3px solid #343a40',
          borderBottom: '1px solid #343a40',
        }}
      >
        <Table>
          <Checkbox style={{ width: '5%' }} onClick={onSelectAll} />
          <div style={{ width: '23%' }}>상품 정보</div>
          <div style={{ width: '12%' }}>카테고리</div>
          <div style={{ width: '12%' }}>재고수량</div>
          <div style={{ width: '12%' }}>판매금액</div>
          <div style={{ width: '12%' }}>상품 옵션</div>
          <div style={{ width: '12%' }}>배송비</div>
          <div style={{ width: '12%' }}>선택</div>
        </Table>
        {products.map((product) => (
          <>
            <TableRow>
              {/* 체크박스 */}
              <Checkbox
                style={{ width: '5%', textAlign: 'center' }}
                checked={product.checked}
                onClick={() => onSelectProduct(product.no)}
              />

              {/* 상품 정보 */}
              <div
                style={{ width: '23%', display: 'flex', alignItems: 'center' }}
              >
                <img src={product.image} width="100px" height="100px" />
                <div style={{ marginLeft: '15px' }}>
                  {product.recommendation ? (
                    <p style={{ fontSize: '0.75rem', color: '#3e91f7' }}>
                      <Icon type="like" />
                      <span> 추천 상품</span>
                    </p>
                  ) : null}
                  <p style={{ fontWeight: 'bold' }}>{product.name}</p>
                </div>
              </div>

              {/* 카테고리 */}
              <div
                style={{
                  width: '12%',
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Select
                  style={{ width: '50%' }}
                  defaultValue={product.category}
                >
                  <Option value="all">All</Option>
                  <Option value="best">Best</Option>
                  <Option value="new">New</Option>
                  <Option value="discount">Discount</Option>
                </Select>
              </div>

              {/* 재고 수량 */}
              <div style={{ width: '12%', textAlign: 'center' }}>
                <p>{product.stock}개</p>
              </div>

              {/* 판매금액 */}
              <div style={{ width: '12%', textAlign: 'center' }}>
                {product.discountRate > 0 ? (
                  <>
                    <p>
                      <span style={{ color: '#fa5252', fontWeight: 'bold' }}>
                        {product.discountRate}%{' '}
                      </span>
                      {product.price * (1 - product.discountRate * 0.01)}원
                    </p>
                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: '#868e96',
                        textDecoration: 'line-through',
                      }}
                    >
                      {product.price}원
                    </p>
                  </>
                ) : (
                  <p>{product.price}원</p>
                )}
              </div>

              {/* 상품 옵션 */}
              <div style={{ width: '12%', textAlign: 'center' }}>
                {product.option.map((option) => (
                  <p style={{ fontSize: '0.8rem' }}>{option}</p>
                ))}
              </div>

              {/* 배송비 */}
              <div style={{ width: '12%', textAlign: 'center' }}>
                {product.delivery > 0 ? (
                  <p>{product.delivery}원</p>
                ) : (
                  <p>무료배송</p>
                )}
              </div>

              {/* 선택 */}
              <div style={{ width: '12%', textAlign: 'center' }}>
                <p style={{ margin: '2.5px 0' }}>
                  <Button style={{ fontSize: '0.75rem' }}>수정</Button>
                </p>
                <p style={{ margin: '2.5px 0' }}>
                  <Button type="primary" style={{ fontSize: '0.75rem' }}>
                    삭제
                  </Button>
                </p>
              </div>
            </TableRow>
          </>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '20px 0',
        }}
      >
        <div>
          <Button>새 상품 등록</Button>
          <Button style={{ marginLeft: '5px' }}>추천상품 관리</Button>
        </div>
        <Button type="primary" style={{ marginLeft: '5px' }}>
          선택상품 삭제
        </Button>
      </div>
    </div>
  );
};

export default MyCartPage;
