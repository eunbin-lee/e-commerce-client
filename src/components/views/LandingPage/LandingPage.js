import React, { useEffect, useState, useRef } from 'react';
import Axios from 'axios';
import { Icon, Tabs, Carousel } from 'antd';
import SearchFeature from './Sections/SearchFeature';
import CreateProducts from '../../utils/CreateProducts';
import VisualSlider from './Sections/VisualSlider';
import visual_img1 from '../../images/visual_1.png';
import visual_img2 from '../../images/visual_2.png';
import visual_img3 from '../../images/visual_3.png';
import visual_img4 from '../../images/visual_4.png';
import './LandingPage.css';

function LandingPage() {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(8);
  const [PostSize, setPostSize] = useState();
  const [SearchTerms, setSearchTerms] = useState('');

  const { TabPane } = Tabs;

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

  // temporary info
  const exampleProducts = [
    {
      id: 1,
      image:
        'https://www.kingplastic.com/wp-content/uploads/2014/12/Charcoal-Gray-300x300.jpg',
      name: 'Product 1',
      price: '00000￦',
    },
    {
      id: 2,
      image:
        'https://www.kingplastic.com/wp-content/uploads/2014/12/Charcoal-Gray-300x300.jpg',
      name: 'Product 2',
      price: '00000￦',
    },
    {
      id: 3,
      image:
        'https://www.kingplastic.com/wp-content/uploads/2014/12/Charcoal-Gray-300x300.jpg',
      name: 'Product 3',
      price: '00000￦',
    },
    {
      id: 4,
      image:
        'https://www.kingplastic.com/wp-content/uploads/2014/12/Charcoal-Gray-300x300.jpg',
      name: 'Product 4',
      price: '00000￦',
    },
  ];
  const exampleEvents = [
    {
      id: 1,
      image:
        'https://www.kingplastic.com/wp-content/uploads/2014/12/Charcoal-Gray-300x300.jpg',
      name: 'Event 1',
      text: "Don't miss it",
    },
    {
      id: 2,
      image:
        'https://www.kingplastic.com/wp-content/uploads/2014/12/Charcoal-Gray-300x300.jpg',
      name: 'Event 2',
      text: "Don't miss it",
    },
    {
      id: 3,
      image:
        'https://www.kingplastic.com/wp-content/uploads/2014/12/Charcoal-Gray-300x300.jpg',
      name: 'Event 3',
      text: "Don't miss it",
    },
  ];

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

  //visual slider
  const TOTAL_VISUALS = 3;
  const [currentVisual, setCurrentVisual] = useState(0);
  const visualRef = useRef(null);

  const nextVisual = () => {
    if (currentVisual >= TOTAL_VISUALS) {
      setCurrentVisual(0);
    } else {
      setCurrentVisual(currentVisual + 1);
    }
  };
  const prevVisual = () => {
    if (currentVisual === 0) {
      setCurrentVisual(TOTAL_VISUALS);
    } else {
      setCurrentVisual(currentVisual - 1);
    }
  };

  useEffect(() => {
    visualRef.current.style.transition = 'all 0.5s ease-in-out';
    visualRef.current.style.transform = `translateX(-${currentVisual}00%)`;
  }, [currentVisual]);

  const playVisual = () => {
    setInterval(() => {
      for (let i = 0; i < TOTAL_VISUALS; i++) {
        visualRef.current.style.transform = `translateX(-${i}00%)`;
      }
      TOTAL_VISUALS = 0;
    }, 500);
  };

  return (
    <div>
      {/* Visual Image */}
      <div className="visual_box">
        <div className="visual_slide" ref={visualRef}>
          <VisualSlider img={visual_img1} />
          <VisualSlider img={visual_img2} />
          <VisualSlider img={visual_img3} />
          <VisualSlider img={visual_img4} />
        </div>
        <Icon type="left" className="visual_button prev" onClick={prevVisual} />
        <Icon
          type="right"
          className="visual_button next"
          onClick={nextVisual}
        />
      </div>

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

          <ul className="main_list">
            {exampleProducts.map((product) => (
              <li key={product.id}>
                <img src={product.image} />
                <p>{product.name}</p>
                <span>{product.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Events */}
        <div style={{ textAlign: 'center', margin: '8rem 0' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Events</h2>

          <ul className="main_list events">
            {exampleEvents.map((event) => (
              <li key={event.id}>
                <img src={event.image} />
                <p style={{ fontWeight: 'bold' }}>{event.name}</p>
                <span style={{ fontSize: '0.8rem' }}>{event.text}</span>
              </li>
            ))}
          </ul>
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
            <ul className="main_list" style={{ marginTop: '0.5rem' }}>
              {exampleProducts.map((product) => (
                <li key={product.id}>
                  <img src={product.image} />
                  <p style={{ fontWeight: 'bold' }}>New {product.name}</p>
                  <span>New product explains</span>
                </li>
              ))}
            </ul>
          </TabPane>
          <TabPane
            tab={
              <h2 style={{ padding: '0 2.5rem', fontSize: '1.5rem' }}>
                Hot Products
              </h2>
            }
            key="2"
          >
            <ul className="main_list" style={{ marginTop: '0.5rem' }}>
              {exampleProducts.map((product) => (
                <li key={product.id}>
                  <img src={product.image} />
                  <p style={{ fontWeight: 'bold' }}>Hot {product.name}</p>
                  <span>Hot product explains</span>
                </li>
              ))}
            </ul>
          </TabPane>
        </Tabs>

        {/* Sale Products */}
        <div style={{ margin: '8rem 0' }}>
          <h2 style={{ marginBottom: '1.5rem' }}>Sales</h2>

          <ul className="main_list">
            {exampleProducts.map((product) => (
              <li key={product.id}>
                <img src={product.image} />
                <p>Sale {product.name}</p>
                <span style={{ color: '#fa5252', fontWeight: 'bold' }}>
                  10%{' '}
                </span>
                <span>{product.price}</span>
                <span
                  style={{
                    display: 'block',
                    marginTop: '0.15rem',
                    color: '#868e96',
                    textDecoration: 'line-through',
                  }}
                >
                  {product.price}
                </span>
              </li>
            ))}
          </ul>
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
