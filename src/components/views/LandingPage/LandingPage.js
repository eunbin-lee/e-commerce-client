import React, { useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import { Icon, Tabs } from 'antd';
import SearchFeature from './Sections/SearchFeature';
import ProductsList from '../../utils/ProductsList';
import VisualSlider from './Sections/VisualSlider';
import './LandingPage.css';

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();
  const [SearchTerms, setSearchTerms] = useState('');

  const [Filters, setFilters] = useState({
    continents: [],
    price: [],
  });

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(variables);
  }, []);

  const getProducts = (variables) => {
    Axios.post('/api/product/getProducts', variables).then((response) => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }
        setPostSize(response.data.postSize);
      } else {
        alert('Failed to fectch product datas');
      }
    });
  };

  const updateSearchTerms = (newSearchTerm) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: newSearchTerm,
    };

    setSkip(0);
    setSearchTerms(newSearchTerm);

    getProducts(variables);
  };

  //example
  const imageUrl =
    'https://www.kingplastic.com/wp-content/uploads/2014/12/Charcoal-Gray-300x300.jpg';
  const exampleProducts = [
    {
      id: 1,
      image: imageUrl,
      name: 'Product 1',
      price: '00000￦',
    },
    {
      id: 2,
      image: imageUrl,
      name: 'Product 2',
      price: '00000￦',
    },
    {
      id: 3,
      image: imageUrl,
      name: 'Product 3',
      price: '00000￦',
    },
    {
      id: 4,
      image: imageUrl,
      name: 'Product 4',
      price: '00000￦',
    },
  ];
  const exampleEvents = [
    {
      id: 1,
      image: imageUrl,
      name: 'Event 1',
      text: "Don't miss it",
    },
    {
      id: 2,
      image: imageUrl,
      name: 'Event 2',
      text: "Don't miss it",
    },
    {
      id: 3,
      image: imageUrl,
      name: 'Event 3',
      text: "Don't miss it",
    },
  ];
  const exampleNewProducts = [
    {
      id: 1,
      image: imageUrl,
      name: 'New Product 1',
      text: 'New product explains',
    },
    {
      id: 2,
      image: imageUrl,
      name: 'New Product 2',
      text: 'New product explains',
    },
    {
      id: 3,
      image: imageUrl,
      name: 'New Product 3',
      text: 'New product explains',
    },
    {
      id: 4,
      image: imageUrl,
      name: 'New Product 4',
      text: 'New product explains',
    },
  ];
  const exampleHotProducts = [
    {
      id: 1,
      image: imageUrl,
      name: 'Hot Product 1',
      text: 'Hot product explains',
    },
    {
      id: 2,
      image: imageUrl,
      name: 'Hot Product 2',
      text: 'Hot product explains',
    },
    {
      id: 3,
      image: imageUrl,
      name: 'Hot Product 3',
      text: 'Hot product explains',
    },
    {
      id: 4,
      image: imageUrl,
      name: 'Hot Product 4',
      text: 'Hot product explains',
    },
  ];
  const exampleDiscountedProducts = [
    {
      id: 1,
      image: imageUrl,
      name: 'Discounted Product 1',
      discountRate: '10%',
      discount: '00000￦',
      cost: '00000￦',
    },
    {
      id: 2,
      image: imageUrl,
      name: 'Discounted Product 2',
      discountRate: '15%',
      discount: '00000￦',
      cost: '00000￦',
    },
    {
      id: 3,
      image: imageUrl,
      name: 'Discounted Product 3',
      discountRate: '20%',
      discount: '00000￦',
      cost: '00000￦',
    },
    {
      id: 4,
      image: imageUrl,
      name: 'Discounted Product 4',
      discountRate: '25%',
      discount: '00000￦',
      cost: '00000￦',
    },
  ];

  //new & hot products
  const { TabPane } = Tabs;

  //weekly hot keywords
  const keywordsArray = [];
  const createKeywords = () => {
    for (let i = 1; i <= 10; i++) {
      keywordsArray.push({
        id: i,
        keyword: '#keyword',
      });
    }
    return keywordsArray;
  };
  createKeywords();

  //keywords slider button
  const keywordsList = useRef();
  const [keywordSlide, setKeywordSlide] = useState({
    sliding: false,
  });
  const onClickLeft = () => {
    setKeywordSlide({
      sliding: false,
    });
  };
  const onClickRight = () => {
    setKeywordSlide({
      sliding: true,
    });
  };

  return (
    <div>
      {/* Visual Image */}
      <VisualSlider />

      <div style={{ width: '75%', margin: '3rem auto' }}>
        {/* Search */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            margin: '1rem auto',
          }}
        >
          <SearchFeature refreshFunction={updateSearchTerms} />
        </div>

        {/* Recommendation Products */}
        <div style={{ margin: '2rem 0' }}>
          <h2 style={{ marginBottom: '1.5rem' }}> Recommendation Products </h2>
          <ProductsList products={exampleProducts} />
        </div>

        {/* Events */}
        <div style={{ textAlign: 'center', margin: '8rem 0' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Events</h2>
          <ProductsList products={exampleEvents} />
        </div>

        {/* New & Hot Products */}
        <Tabs defaultActiveKey="1">
          <TabPane
            tab={
              <h2 style={{ padding: '0 2.5rem', fontSize: '1.5rem' }}>
                New Products
              </h2>
            }
            key="1"
          >
            <ProductsList products={exampleNewProducts} />
          </TabPane>
          <TabPane
            tab={
              <h2 style={{ padding: '0 2.5rem', fontSize: '1.5rem' }}>
                Hot Products
              </h2>
            }
            key="2"
          >
            <ProductsList products={exampleHotProducts} />
          </TabPane>
        </Tabs>

        {/* Discounted Products */}
        <div style={{ margin: '8rem 0' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Discount</h2>
          <ProductsList products={exampleDiscountedProducts} />
        </div>

        {/* Weekly hot keywords */}
        <div style={{ margin: '8rem 0' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Weekly Hot Keywords</h2>

          <div className="keywords_box">
            <Icon
              type="left"
              onClick={onClickLeft}
              className="keywords_button left"
            />
            <ul
              className="main_list keywords"
              ref={keywordsList}
              style={{
                left: keywordSlide.sliding ? 'unset' : '0',
                right: keywordSlide.sliding ? '0' : 'unset',
              }}
            >
              {keywordsArray.map((item) => (
                <li key={item.id}>
                  <span>
                    {item.keyword}
                    {item.id}
                  </span>
                </li>
              ))}
            </ul>
            <Icon
              type="right"
              onClick={onClickRight}
              className="keywords_button right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
