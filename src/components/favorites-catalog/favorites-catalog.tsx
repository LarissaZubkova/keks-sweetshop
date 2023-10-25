import ClearButton from '../clear-button/clear-button';
//import ProductCard from '../product-card/product-card';

function FavoritesCatalog(): JSX.Element {
  return (
    <section className="favourites">
      <ClearButton />
      <section className="catalog">
        <div className="container">
          <h2 className="visually-hidden">Каталог</h2>
          <div className="catalog__wrapper">
            <ul className="catalog__list">
              {/* <ProductCard /> */}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default FavoritesCatalog;
