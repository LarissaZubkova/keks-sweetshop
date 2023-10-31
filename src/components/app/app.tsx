import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { fetchCakesAction, checkAuthAction, fetchLastReviewAction, fetchFavoritesAction } from '../../store/api-actions';
import { getAuthCheckedStatus, getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import SignupScreen from '../../pages/signup-screen/signup-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import PrivateRoute from '../private-route/private-route';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import ProductScreen from '../../pages/product-screen/product-screen';
import Loading from '../loading/loading';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const isAuthChecked = useAppSelector(getAuthCheckedStatus);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchCakesAction());
    dispatch(checkAuthAction());
    dispatch(fetchLastReviewAction());

    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavoritesAction);
    }
  }, [dispatch, authorizationStatus]);

  if(!isAuthChecked) {
    return <Loading />;
  }

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route path={AppRoute.LogIn} element={<LoginScreen />} />
        <Route element={<PrivateRoute authorizationStatus={authorizationStatus} />}>
          <Route element={<FavoritesScreen />} path={AppRoute.Favorites} />
        </Route>
        <Route path={AppRoute.Product} element={<ProductScreen />} />
        <Route path={AppRoute.SignUp} element={<SignupScreen />} />
        <Route path={AppRoute.Catalog} element={<CatalogScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
