/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
import '../App.scss';
// import { MdKeyboardArrowRight, MdKeyboardArrowLeft, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import React, { useEffect, useState } from 'react';
import { getPhones } from '../api/fetching';
import { ProductCard } from '../components/ProductCard';
// import { ProductCard } from '../components/ProductCard';
// import { Products } from '../type/products';
// import { ProductsSlider } from '../components/ProductsSlider';

// interface Props {
//   filteredDiscout: Products[];
//   filteredNew: Products[];
// }

export const PhonesPage:React.FC = () => {
  const [filteredPhone, setFilteredPhone] = useState([]);

  useEffect(() => {
    getPhones()
      .then(products => {
        // setData(products);
        const filterPhone
          = products.filter((product: any) => product.type === 'phone');

        setFilteredPhone(filterPhone);
        // console.log(filterPhone);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="title">Mobile phones</h2>

      <ProductCard product={filteredPhone} />
      {/* <ProductCard products={filteredPhone} /> */}

    </div>

  );
};
