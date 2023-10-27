import { useAppSelector } from '../../hooks';
import { getProducts } from '../../store/products-process/products-process.selector';
//import { useState } from 'react';
//import { DEFAULT_CARDS_COUNT } from '../../const';
import ShowMoreButton from '../show-more-button/show-more-button';
import ProductCard from '../product-card/product-card';

function Catalog() {
  //const [filmsCount, setFilmsCount] = useState(DEFAULT_CARDS_COUNT);

  const cakes = useAppSelector(getProducts);

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">
          <ul className="catalog__list">
            {cakes.map((cake) => <ProductCard key={cake.id} cake={cake} />)}
          </ul>
          <ShowMoreButton />
        </div>
      </div>
    </section>
  );
}

export default Catalog;
