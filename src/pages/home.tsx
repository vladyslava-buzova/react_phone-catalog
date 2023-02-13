/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
import '../App.scss';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { ProductsSlider } from '../components/ProductsSlider';
import { getBrandNewProducts, getHotPriceProducts } from '../api/fetching';

export const Home:React.FC = () => {
  const [data, setData] = useState([]);
  const [filteredDiscout, setFilteredDiscout] = useState(data);
  const [filteredNew, setFilteredNew] = useState(data);

  useEffect(() => {
    getHotPriceProducts()
      .then(products => {
        setData(products);
        const filterDiscount
          = products.filter((product: any) => product.discount !== 0);

        setFilteredDiscout(filterDiscount);

        // const filterNew
        //   = products.filter((product: any) => product.discount === 0);
        // const sorting = filterNew.sort((product1: any, product2: any) => product2.price - product1.price);

        // setFilteredNew(sorting);
      });

    getBrandNewProducts()
      .then(products => {
        setData(products);
        const filterNew
          = products.filter((product: any) => product.discount === 0);
        const sorting = filterNew.sort((product1: any, product2: any) => product2.price - product1.price);

        setFilteredNew(sorting);
      });
  }, []);

  return (
    <main className="main">
      <div className="hero">
        <div className="container">
          <div className="banner">
            <div className="arrow-wrap">
              <img
                src={require('../img/arrow-right.svg').default}
                alt="arrow-right"
                className="arrow"
              />
            </div>
            <div className="img-wrap">
              <img
                src={require('../img/Banner.png').default}
                alt="banner"
                className="banner-img"
              />
            </div>
            <div className="arrow-wrap">
              <img
                src={require('../img/arrow-left.svg').default}
                alt="arrow-left"
                className="arrow"
              />
            </div>
          </div>
          <div className="lines">
            <span className="lines__desh lines__desh-active"> </span>
            <span className="lines__desh"> </span>
            <span className="lines__desh"> </span>
          </div>

        </div>
      </div>
      {/* ----- hot prices -------------------- */}
      <div className="hotPrices">
        <div className="container">
          <div className="title-wrap">
            <h2 className="hotPrices__title title">Hot prices</h2>
            <div className="arrows-wrapp">
              <button type="button" className="previous btn">
                <MdKeyboardArrowLeft />
              </button>
              <button type="button" className="next btn">
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>

          <ProductsSlider filtered={filteredDiscout} />

        </div>
      </div>
      {/* ---------category -------------- */}
      <div className="category">
        <div className="container">
          <h2 className="category__title title">Shop by category</h2>
          <div className="category__content">
            <div className="category__content-card">
              <a href="#phones" data-cy="categoryLinksContainer">
                <img
                  src={require('../img/phones1.png').default}
                  alt="phones"
                  className="category__content-img"
                />
              </a>

              <p className="category__content-name">Mobile phones</p>
              <span className="category__content-amount">95 models</span>
            </div>

            <div className="category__content-card">
              <a href="#tablets" data-cy="categoryLinksContainer">
                <img
                  src={require('../img/phones2.png').default}
                  alt="phones"
                  className="category__content-img"
                />
              </a>

              <p className="category__content-name">Mobile phones</p>
              <span className="category__content-amount">95 models</span>
            </div>

            <div className="category__content-card">
              <a href="#accessories" data-cy="categoryLinksContainer">
                <img
                  src={require('../img/phones3.png').default}
                  alt="phones"
                  className="category__content-img"
                />
              </a>

              <p className="category__content-name">Mobile phones</p>
              <span className="category__content-amount">95 models</span>
            </div>
          </div>
        </div>
      </div>
      {/* // ----new models --------------- */}
      <div className="newModels">
        <div className="container">
          {/* <ProductsSlider /> */}
          <div className="title-wrap">
            <h2 className="newModels__title title">Brand new models</h2>
            <div className="arrows-wrapp">
              <button type="button" className="previous btn">
                <MdKeyboardArrowLeft />
              </button>
              <button type="button" className="next btn">
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>

          <ProductsSlider filtered={filteredNew} />
        </div>
      </div>
    </main>
  );
};
