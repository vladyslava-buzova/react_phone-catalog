/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';
// import 'bulma/css/bulma.min.css';
import React, { useEffect, useState } from 'react';
import { getPhones } from '../api/fetching';
import { ProductsList } from '../components/ProductsList';
import '../App.scss';
// import { Header } from '../components/header';

export const PhonesPage:React.FC = () => {
  const [filteredPhone, setFilteredPhone] = useState([]);

  useEffect(() => {
    getPhones()
      .then(products => {
        const filterPhone
          = products.filter((product: any) => product.type === 'phone');

        setFilteredPhone(filterPhone);
      });
  }, []);

  return (
    <div className="phones">
      {/* <Header /> */}

      <div className="phonesPage">
        <div className="container">
          <div className="page__navigation">
            <img
              src={require('../img/Home.svg').default}
              alt="home"
            />

            <div className="page__navigation--arrow">
              <MdKeyboardArrowRight />
            </div>
            <span className="page__navigation--pageName">Phones</span>
          </div>
          <h1 className="page__title title">Mobile phones</h1>

          <span className="page__amount">
            {`${filteredPhone.length} models`}
          </span>

          <div className="sorting">
            <div className="wrapp">
              <span className="sorting__title">Sort by</span>
              <div className="sorting__sortBy">
                <select
                  data-cy="statusSelect"
                  className="sorting__selection sorting__selection--sortBy"
                >
                  <option value="age">Newest</option>
                  <option value="name">Alphabetically</option>
                  <option value="price">Cheapest</option>
                </select>
                {/* <span className="custom-arrow" /> */}
                <span className="custom-arrow">
                  <RiArrowDownSLine />
                </span>
              </div>
            </div>

            <div className="wrapp">
              <span className="sorting__title">Items on page</span>
              <div className="sorting__items">
                <select
                  data-cy="perPageSelector"
                  className="sorting__selection sorting__selection--items"
                  // data-cy="paginationRight"
                  // value={selection}
                  // onChange={handleChange}
                >
                  <option value="age">All</option>
                  <option value="name">4</option>
                  <option value="price">8</option>
                  <option value="price">16</option>
                </select>
                {/* <span className="custom-arrow" /> */}
                <span className="custom-arrow">
                  <RiArrowDownSLine />
                </span>
              </div>
            </div>
          </div>

          <ProductsList
            filteredProductsList={filteredPhone}
          />

          <div className="pagination">
            {/* <div className="arrows-wrapp"> */}
            <button
              type="button"
              className="pagination__arrow previous btn"
              data-cy="paginationLeft"
            >
              <MdKeyboardArrowLeft />
            </button>

            <div className="pagination__numbers">
              <button type="button" className="pagination__btn btn">1</button>
              <button type="button" className="pagination__btn btn">2</button>
              <button type="button" className="pagination__btn btn">3</button>
              <button type="button" className="pagination__btn btn">4</button>
            </div>

            <button
              type="button"
              className="pagination__arrow next btn"
              data-cy="paginationRight"
            >
              <MdKeyboardArrowRight />
            </button>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>

  );
};
