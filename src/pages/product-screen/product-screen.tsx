import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { fetchProductCardAction } from '../../store/api-actions';
import BackArrow from '../../components/back-arrow/back-arrow';
import CatalogComments from '../../components/catalog-comments/catalog-comments';
import FilterSort from '../../components/filter-sort/filter-sort';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ProductDetails from '../../components/product-details/product-details';
import ReviewForm from '../../components/review-form/review-form';
import { getProductCardErrorStatus } from '../../store/product-card-process/product-card-process.selector';
import ErrorScreen from '../error-screen/error-screen';

function ProductScreen():JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const hasProductError = useAppSelector(getProductCardErrorStatus);
  const {id} = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductCardAction(id));
    }
  }, [id, dispatch]);

  if (hasProductError) {
    <ErrorScreen />;
  }

  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Карточка: пользователь не авторизован</h1>
        <BackArrow />
        <ProductDetails />
        {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
        <FilterSort />
        <CatalogComments />
      </main>
      <Footer />
    </div>
  );
}

export default ProductScreen;
