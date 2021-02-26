import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Row, Col } from 'antd';
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import { addToCart } from '../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
import './DetailProductPage.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

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

  const [tabs, setTabs] = useState(0);
  const [color, setColor] = useState(false);

  const onChangeColor = () => {
    setColor({
      color: !color,
    });
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

      <Tabs
        selectedIndex={tabs}
        onSelect={(tabs) => setTabs(tabs)}
        className="tabs_box"
      >
        <TabList className="tabs_list">
          <Tab
            className={`tab ${color ? 'on' : 'off'}`}
            onClick={onChangeColor}
          >
            <span>Details</span>
          </Tab>
          <Tab className={`tab ${color ? 'on' : 'off'}`}>
            <span>Related</span>
          </Tab>
          <Tab className={`tab ${color ? 'on' : 'off'}`}>
            <span>Reviews</span>
          </Tab>
          <Tab className={`tab ${color ? 'on' : 'off'}`}>
            <span>Q &amp; A</span>
          </Tab>
        </TabList>
        <TabPanel style={{ textAlign: 'center' }}>
          <div>Detailed Description</div>
        </TabPanel>
        <TabPanel style={{ textAlign: 'center' }}>
          <div>Related Products</div>
        </TabPanel>
        <TabPanel style={{ textAlign: 'center' }}>
          <div>Reviews</div>
        </TabPanel>
        <TabPanel style={{ textAlign: 'center' }}>
          <div>Q &amp; A</div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default DetailProductPage;
