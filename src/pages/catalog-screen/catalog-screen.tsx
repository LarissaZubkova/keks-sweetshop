import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getProductsErrorStatus } from '../../store/products-process/products-process.selector';
import { useState } from 'react';
import Header from '../../components/header/header';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import BackArrow from '../../components/back-arrow/back-arrow';
import ErrorScreen from '../error-screen/error-screen';

function CatalogScreen() {
  const hasError = useAppSelector(getProductsErrorStatus);
  const [selectedFilters, setSelectedFilters] = useState({
    firstLevel: null,
    secondLevel: null,
  });

  return (
    <div className="wrapper">
      <Helmet>
        <title>Кондитерская Кекс - Каталог</title>
      </Helmet>
      <Header />
      {hasError ?
        <ErrorScreen /> :
        <main>
          <h1 className="visually-hidden">Каталог товаров</h1>
          <BackArrow />
          <CatalogFilter selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} />
          <Catalog />
        </main>}
      <Footer />
    </div>
  );
}

export default CatalogScreen;
