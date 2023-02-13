/* eslint-disable global-require */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-var-requires */

// import { Products } from '../type/products';
import '../App.scss';

interface Props {
  product: any;
  // filteredPhone: any
  // filteredNew: Products[];
}
export const ProductCard:React.FC<Props> = ({ product }) => {
  // const {
  //   imageUrl, name, price, discount, screen, capacity, ram,
  // } = product;

  return (
    <div className="card" data-cy="cardsContainer">
      <div className="card__img">
        <img
          src={product.imageUrl}
          className="img"
          alt={product.name}
        />
      </div>

      <p className="card__text">
        {product.name}
      </p>

      <div className="card__price">
        {product.discount !== 0 ? (
          <>
            <span className="card__price--new">
              {`$${product.price - product.discount}`}
            </span>
            <span className="card__price--old">{`${product.price}`}</span>
          </>
        ) : (
          <span className="card__price--new">{`${product.price}`}</span>
        )}
      </div>

      <div className="card__description">
        <div className="card__description-wrapp">
          <span className="card__description--name">Screen</span>
          <span className="card__description--number">{product.screen}</span>
        </div>
        <div className="card__description-wrapp">
          <span className="card__description--name">Capacity</span>
          <span className="card__description--number">{product.capacity}</span>
        </div>
        <div className="card__description-wrapp">
          <span className="card__description--name">RAM</span>
          <span className="card__description--number">{product.ram}</span>
        </div>
      </div>

      <div className="card__btn-wrapp">
        <button
          type="button"
          className="card__btn"
        >
          Add to cart
        </button>

        <div className="card__favourite">
          <img
            src={require('../img/favourite.svg').default}
            alt="favourite"
            className="favourite icons"
          />
        </div>
      </div>
    </div>
  );
};
