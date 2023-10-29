import { CakeFullCard } from '../../types/product';
import ClearButton from '../clear-button/clear-button';
import ProductCard from '../product-card/product-card';

type FavoritesCatalogProps = {
  favorites: CakeFullCard[];
}

function FavoritesCatalog({favorites}: FavoritesCatalogProps): JSX.Element {
  return (
    <section className="favourites">
      <ClearButton favorites={favorites} />
      <section className="catalog">
        <div className="container">
          <h2 className="visually-hidden">Каталог</h2>
          <div className="catalog__wrapper">
            <ul className="catalog__list">
              {favorites && favorites.map((favorite) => <ProductCard key={favorite.id} cake={favorite} />)}
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}

export default FavoritesCatalog;
