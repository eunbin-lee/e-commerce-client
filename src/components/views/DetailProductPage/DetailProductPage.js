import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { addToCart } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
import ProductTabs from './Sections/ProductTabs';

function DetailProductPage(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.productId;
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
      (response) => {
        setProduct(response.data[0]);
      },
    );
  }, []);

  const addToCartHandler = (productId) => {
    dispatch(addToCart(productId));
  };

  //탭메뉴
  const [tabs, setTabs] = useState([
    {
      id: 1,
      name: 'Details',
      selected: false,
    },
    {
      id: 2,
      name: 'Related',
      selected: false,
    },
    {
      id: 3,
      name: 'Reviews',
      selected: false,
    },
    {
      id: 4,
      name: 'Q & A',
      selected: false,
    },
  ]);
  const onSelectTab = (id) => {
    setTabs(
      tabs.map((tab) => (tab.id === id ? { ...tab, tab: !tab.selected } : tab)),
    );
  };

  return (
    <div
      className="postPage"
      style={{
        width: '80%',
        padding: '3rem 4rem',
        margin: '0 auto',
      }}
    >
      <Row gutter={[2, 2]}>
        <Col lg={12} xs={24} style={{ width: '60%' }}>
          <ProductImage detail={Product} />
        </Col>
        <Col lg={12} xs={24} style={{ width: '40%' }}>
          <ProductInfo addToCart={addToCartHandler} detail={Product} />
        </Col>
      </Row>

      {/* <ProductTabs tabs={tabs} onSelectTab={onSelectTab} /> */}

      <div id="tab1" style={{ paddingTop: '3px' }}>
        <div className="tabs_box">
          <ul>
            <li className="on">
              <a href="#tab1">Details</a>
            </li>
            <li className="off">
              <a href="#tab2">Related</a>
            </li>
            <li className="off">
              <a href="#tab3">Reviews</a>
            </li>
            <li className="off">
              <a href="#tab4">Q &amp; A</a>
            </li>
          </ul>
        </div>
        <div
          style={{
            width: '100%',
            height: '800px',
            backgroundColor: '#eee',
            textAlign: 'center',
            lineHeight: '800px',
          }}
        >
          Detailed Description
        </div>
      </div>
      <div id="tab2" style={{ paddingTop: '3px' }}>
        <div className="tabs_box">
          <ul>
            <li className="off">
              <a href="#tab1">Details</a>
            </li>
            <li className="on">
              <a href="#tab2">Related</a>
            </li>
            <li className="off">
              <a href="#tab3">Reviews</a>
            </li>
            <li className="off">
              <a href="#tab4">Q &amp; A</a>
            </li>
          </ul>
        </div>
        <div
          style={{
            width: '100%',
            height: '400px',
            backgroundColor: '#eee',
            textAlign: 'center',
            lineHeight: '400px',
          }}
        >
          Related Products
        </div>
      </div>
      <div id="tab3" style={{ paddingTop: '3px' }}>
        <div className="tabs_box">
          <ul>
            <li className="off">
              <a href="#tab1">Details</a>
            </li>
            <li className="off">
              <a href="#tab2">Related</a>
            </li>
            <li className="on">
              <a href="#tab3">Reviews</a>
            </li>
            <li className="off">
              <a href="#tab4">Q &amp; A</a>
            </li>
          </ul>
        </div>
        <div
          style={{
            width: '100%',
            height: '300px',
            backgroundColor: '#eee',
            textAlign: 'center',
            lineHeight: '300px',
          }}
        >
          Reviews
        </div>
      </div>
      <div id="tab4" style={{ paddingTop: '3px' }}>
        <div className="tabs_box">
          <ul>
            <li className="off">
              <a href="#tab1">Details</a>
            </li>
            <li className="off">
              <a href="#tab2">Related</a>
            </li>
            <li className="off">
              <a href="#tab3">Reviews</a>
            </li>
            <li className="on">
              <a href="#tab4">Q &amp; A</a>
            </li>
          </ul>
        </div>
        <div
          style={{
            width: '100%',
            height: '300px',
            backgroundColor: '#eee',
            textAlign: 'center',
            lineHeight: '300px',
          }}
        >
          Q &amp; A
        </div>
      </div>
    </div>
  );
}

export default DetailProductPage;
