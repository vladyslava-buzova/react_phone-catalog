/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
import { MdKeyboardArrowRight } from 'react-icons/md';
import 'bulma/css/bulma.min.css';
import React, { useEffect, useState } from 'react';
import { getPhones } from '../api/fetching';
import { ProductsList } from '../components/ProductsList';

import '../App.scss';

export const PhonesPage:React.FC = () => {
  const [filteredPhone, setFilteredPhone] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getPhones()
      .then(products => {
        const filterPhone
          = products.filter((product: any) => product.type === 'phone');

        setFilteredPhone(filterPhone);
      });
    setIsLoading(false);
  }, []);

  return (
    <div className="phonesPage">
      <div className="container">
        <div className="phonesPage__navigation">
          <img
            src={require('../img/Home.svg').default}
            alt="home"
          />

          <div className="phonesPage__navigation--arrow">
            <MdKeyboardArrowRight />
          </div>
          <span className="phonesPage__navigation--pageName">Phones</span>
        </div>
        <h1 className="phonesPage__title title">Mobile phones</h1>

        <span className="phonesPage__amount">95 models</span>

        <ProductsList
          filteredProductsList={filteredPhone}
          isLoading={isLoading}
        />
      </div>
    </div>

  );
};
