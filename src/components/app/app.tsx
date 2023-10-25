import { HelmetProvider } from 'react-helmet-async';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { AppRoute } from '../../const';
import { fetchCakesAction, checkAuthAction } from '../../store/api-actions';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import CatalogScreen from '../../pages/catalog-screen/catalog-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import SignupScreen from '../../pages/signup-screen/signup-screen';
import MainScreen from '../../pages/main-screen/main-screen';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCakesAction);
    dispatch(checkAuthAction());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route path={AppRoute.LogIn} element={<LoginScreen />} />
        <Route path={AppRoute.SignUp} element={<SignupScreen />} />
        <Route path={AppRoute.Catalog} element={<CatalogScreen />} />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
