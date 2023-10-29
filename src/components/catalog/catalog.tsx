import { useAppSelector } from '../../hooks';
import { getProducts } from '../../store/products-process/products-process.selector';
import { useState, useEffect } from 'react';
import { DEFAULT_CARDS_COUNT } from '../../const';
import { filterFirstLevel, filterByType } from '../../utils/utils';
import { getFirstLevelFilter, getSecondLevelFilter } from '../../store/filters-process/filters-process.selector';
import ShowMoreButton from '../show-more-button/show-more-button';
import ProductCard from '../product-card/product-card';
import NoFilteredCakes from '../no-filtered-cakes/no-filtered-cakes';
import ToStartButton from '../to-start-button/to-start-button';

function Catalog() {
  const [cardsCount, setCardsCount] = useState(DEFAULT_CARDS_COUNT);
  const cakes = useAppSelector(getProducts);
  const firstLevel = useAppSelector(getFirstLevelFilter);
  const secondLevel = useAppSelector(getSecondLevelFilter);
  let products;

  useEffect(() => {
    setCardsCount(DEFAULT_CARDS_COUNT);
  }, [firstLevel, secondLevel]);

  if (firstLevel) {
    products = filterFirstLevel[firstLevel](cakes);
  } else {
    products = cakes;
  }

  if (secondLevel.length > 0) {
    products = filterByType(secondLevel, products);
  }

  if (!products.length) {
    return <NoFilteredCakes />;
  }

  const currentProductsList = products.slice(0, cardsCount);

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">
          <ul className="catalog__list">
            {currentProductsList.map((cake) => <ProductCard key={cake.id} cake={cake} />)}
          </ul>
          {cardsCount < products.length ? <ShowMoreButton cardsCount={cardsCount} setCardsCount={setCardsCount} /> : <ToStartButton />}
        </div>
      </div>
    </section>
  );
}

export default Catalog;
