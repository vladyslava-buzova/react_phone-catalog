const BASE_URL
= 'https://mate-academy.github.io/react_phone-catalog/api';

const request = (url: string) => {
  return fetch(`${BASE_URL}${url}`)
    .then(response => {
      return response.json();
    })
    .then(result => result);
};

export const getHotPriceProducts = () => request('/products.json');
export const getBrandNewProducts = () => request('/products.json');
export const getPhones = () => request('/products.json');
export const getTablets = () => request('/products.json');
export const getAccessories = () => request('/products.json');
