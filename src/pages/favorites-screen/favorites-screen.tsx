import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getFavorites, getFavoritesLoadingStatus, getFavoritesErrorStatus } from '../../store/favorite-process/favorite-process.selector';
import Header from '../../components/header/header';
import BackArrow from '../../components/back-arrow/back-arrow';
import NumberOfFavorites from '../../components/number-of-favorites/number-of-favorites';
import Footer from '../../components/footer/footer';
import FavoritesCatalog from '../../components/favorites-catalog/favorites-catalog';
import FavoritesEmpty from '../../components/favorites-empty/favorites-empty';
import ErrorScreen from '../error-screen/error-screen';
import Loading from '../../components/loading/loading';

function FavoritesScreen(): JSX.Element {
  const favorites = useAppSelector(getFavorites);
  const isLoading = useAppSelector(getFavoritesLoadingStatus);
  const hasError = useAppSelector(getFavoritesErrorStatus);

  if(isLoading) {
    return <Loading />;
  }

  if(hasError) {
    return <ErrorScreen />;
  }

  return (
    <div className="wrapper">
      <Helmet>
        <title>Кондитерская Кекс - Избранное</title>
      </Helmet>
      <Header />
      <main>
        <div className="favorites-page">
          <h1 className="visually-hidden">Избранное</h1>
          <BackArrow />
          {favorites.length === 0 ? <FavoritesEmpty /> :
            <>
              <NumberOfFavorites favorites={favorites} />
              <FavoritesCatalog favorites={favorites} />
            </>}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
