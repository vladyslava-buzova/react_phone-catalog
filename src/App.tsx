import './App.scss';
import React from 'react';
// import favourite from '../src/img/favourite.svg';

export const App:React.FC = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="header__left">
          <a href="/" className="logo">
            <img
              src={require('./img/LOGO.svg').default}
              alt="logo"
            />
          </a>
          <nav className="nav">
            <li className="nav__item">
              <a href="/" className="nav__link">
                home
              </a>
            </li>
            <li className="nav__item"><a href="/">Phones</a></li>
            <li className="nav__item"><a href="/">tablets</a></li>
            <li className="nav__item"><a href="/">accessories</a></li>
          </nav>
        </div>

        <div className="header__right">
          <a href="/" className="header__right-icon">
            <img
              src={require('./img/favourite.svg').default}
              alt="favourite"
              className="favourite icons"
            />
          </a>
          <a href="/" className="header__right-icon">
            <img
              src={require('./img/cart.svg').default}
              alt="cart"
              className="cart icons"
            />
          </a>
        </div>
      </header>

      <main className="main">
        <div className="header-section">
          <div className="container">
            <div className="banner">
              <div className="arrow-wrap">
                <img
                  src={require('./img/arrow-right.svg').default}
                  alt="arrow-right"
                  className="arrow"
                />
              </div>
              <div className="img-wrap">
                <img
                  src={require('./img/Banner.png').default}
                  alt="banner"
                  className="banner-img"
                />
              </div>
              <div className="arrow-wrap">
                <img
                  src={require('./img/arrow-left.svg').default}
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

        <div className="hotPrices-section">
          <div className="container">

            <div className="hotPrices-section__title-wrap">
              <h2 className="hotPrices-section__title">Hot prices</h2>
              <div className="arrows-wrapp">
                <button type="button" className="previous btn">1</button>
                <button type="button" className="next btn">2</button>
              </div>
            </div>

            <div className="card">
              <div className="card__img">
                <div className="img" />
              </div>

              <p className="card__text">
                Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
              </p>

              <div className="card__price">
                <span className="card__price--new">$799</span>
                <span className="card__price--old">$899</span>
              </div>

              <div className="card__description">
                <div className="card__description-wrapp">
                  <span className="card__description--name">Screen</span>
                  <span className="card__description--number">5.8” OLED</span>
                </div>
                <div className="card__description-wrapp">
                  <span className="card__description--name">Capacity</span>
                  <span className="card__description--number">64 GB</span>
                </div>
                <div className="card__description-wrapp">
                  <span className="card__description--name">RAM</span>
                  <span className="card__description--number">4 GB</span>
                </div>
              </div>

              <div className="card__btn-wrapp">
                <div className="card__btn">Add to cart</div>

                <div className="card__favourite">
                  <img
                    src={require('./img/favourite.svg').default}
                    alt="favourite"
                    className="favourite icons"
                  />
                </div>
              </div>

            </div>


          </div>
        </div>

        <div className="category-section">
          <div className="container">

          </div>
        </div>

        <div className="newModels-section">
          <div className="container">

          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer__flex">
            <a href="/" className="logo">
              <img
                src={require('./img/LOGO.svg').default}
                alt="logo"
                className="logo-footer"
              />
            </a>
            <nav className="nav nav-footer">
              <li className="nav__item"><a href="/">Github</a></li>
              <li className="nav__item"><a href="/">Contacts</a></li>
              <li className="nav__item"><a href="/">rights</a></li>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
