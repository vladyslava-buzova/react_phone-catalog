/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */
import '../App.scss';
import { Products } from '../type/products';
import { ProductCard } from './ProductCard';
// import '../ProductsSlider.scss';

interface Props {
  filtered: Products[];
  // filteredNew: Products[];
}
export const ProductsSlider:React.FC<Props> = ({ filtered }) => {
  return (
    <div className="hotPrices__content content">
      {filtered.map(product => (
        <ProductCard
          key={product.id}
          // data-cy="cardsContainer"
          product={product}
        />
      ))}
    </div>
  );
};
