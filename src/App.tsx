/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
import './App.scss';
import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { Home } from './pages/home';
import { PhonesPage } from './pages/phones';
import { Tablets } from './pages/tablet';
import { Favourite } from './pages/favourite';
import { Cart } from './pages/cart';
// import { Favourite } from './pages/accessories';
// import { PhonesPage } from './pages/phones';

export const App:React.FC = () => {
  return (
    <div className="App">
      <header className="header">
        <div className="header__left">
          <Link to="/" className="logo">
            <img
              src={require('./img/LOGO.svg').default}
              alt="logo"
            />
          </Link>
          <nav className="nav">
            <li className="nav__item">
              <a href="/" className="nav__link">
                home
              </a>
            </li>
            <li className="nav__item">
              <Link to="phones">Phones</Link>
            </li>
            <li className="nav__item">
              <Link to="tablets">tablets</Link>
            </li>
            <li className="nav__item">
              <Link to="accessories">accessories</Link>
            </li>
          </nav>
        </div>

        <div className="header__right">
          <Link to="favourite" className="header__right-icon">
            <img
              src={require('./img/favourite.svg').default}
              alt="favourite"
              className="favourite icons"
            />
          </Link>
          <Link to="cart" className="header__right-icon">
            <img
              src={require('./img/cart.svg').default}
              alt="cart"
              className="cart icons"
            />
          </Link>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="phones"
          element={<PhonesPage />}
        />

        <Route
          path="tablets"
          element={<Tablets />}
        />

        <Route
          path="favourite"
          element={<Favourite />}
        />

        <Route
          path="cart"
          element={<Cart />}
        />

      </Routes>

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
              <li className="nav__item">
                <Link to="/">Github</Link>
              </li>
              <li className="nav__item">
                <Link to="contacts">Contacts</Link>
              </li>
              <li className="nav__item">
                <Link to="/">rights</Link>
              </li>
            </nav>

            <div className="backToTop">
              <span className="backToTop__text">Back to top</span>
              <button type="button" className="backToTop__btn btn">
                <MdOutlineKeyboardArrowUp />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
