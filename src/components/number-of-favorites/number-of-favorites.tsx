import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CakeFullCard } from '../../types/product';
import { getFormat } from '../../utils/utils';

type NumberOfFavoritesProps = {
  favorites: CakeFullCard[];
}

function NumberOfFavorites({favorites}: NumberOfFavoritesProps): JSX.Element {
  const favoritesCount = favorites.length;
  const price = favorites.reduce((acc, favorite) => acc + favorite.price, 0);

  return (
    <section className="number-of-favourites favorites-page__qty">
      <div className="container">
        <h2 className="visually-hidden">Количество товаров в избранном.</h2>
        <p className="number-of-favourites__cakes">{favoritesCount} кекса</p>
        <div className="number-of-favourites__wrapper">
          <div className="number-of-favourites__wrap-price">
            <p className="number-of-favourites__text">Всего</p>
            <p className="number-of-favourites__price">{`${getFormat(price)} р`}</p>
          </div>
        </div>
        <div className="number-of-favourites__button">
          <Link className="btn" to={AppRoute.Catalog}>В каталог</Link>
        </div>
      </div>
    </section>
  );
}

export default NumberOfFavorites;
