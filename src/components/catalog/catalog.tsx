import { useAppSelector, useAppDispatch } from '../../hooks';
import { getProducts } from '../../store/products-process/products-process.selector';
import ProductCard from '../product-card/product-card';
import { useEffect } from 'react';
import { fetchCakesAction } from '../../store/api-actions';
import ShowMoreButton from '../show-more-button/show-more-button';

function Catalog() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCakesAction());
  }, [dispatch]);

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
