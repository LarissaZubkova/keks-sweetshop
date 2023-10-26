import BackArrow from '../../components/back-arrow/back-arrow';
import CatalogComments from '../../components/catalog-comments/catalog-comments';
import FilterSort from '../../components/filter-sort/filter-sort';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ProductDetails from '../../components/product-details/product-details';
import ReviewForm from '../../components/review-form/review-form';
import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';

function ProductScreen():JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

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
