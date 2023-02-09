/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
import './App.scss';
import React from 'react';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { Home } from './pages/home';
import { PhonesPage } from './pages/phones';

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
            <li className="nav__item"><a href="/phones">Phones</a></li>
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
      <Home />

      <PhonesPage />

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
