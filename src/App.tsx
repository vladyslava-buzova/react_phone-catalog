import './App.scss';
// import favourite from '../src/img/favourite.svg';

const App = () => (
  <div className="App">
    <header className="header">
      <div className="header__left">
        <a href="/" className="logo">
          <img
            src={require('./img/LOGO.svg').default}
            alt="logo"
            // className="loo"
          />
        </a>
        <nav className="nav">
          <li className="nav__item"><a href="/">home</a></li>
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
  </div>
);

export default App;
