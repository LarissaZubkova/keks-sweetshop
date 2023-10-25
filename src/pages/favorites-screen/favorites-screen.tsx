import Header from '../../components/header/header';
import BackArrow from '../../components/back-arrow/back-arrow';
import NumberOfFavorites from '../../components/number-of-favorites/number-of-favorites';
import Footer from '../../components/footer/footer';
import FavoritesCatalog from '../../components/favorites-catalog/favorites-catalog';

function FavoritesScreen(): JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="favorites-page">
          <h1 className="visually-hidden">Избранное</h1>
          <BackArrow />
          <NumberOfFavorites />
          <FavoritesCatalog />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
