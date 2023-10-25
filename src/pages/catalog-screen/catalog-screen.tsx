import Header from '../../components/header/header';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import BackArrow from '../../components/back-arrow/back-arrow';
import { Helmet } from 'react-helmet-async';

function CatalogScreen() {
  return (
    <div className="wrapper">
      <Helmet>
        <title>Кондитерская Кекс - Каталог</title>
      </Helmet>
      <Header />
      <main>
        <h1 className="visually-hidden">Каталог товаров</h1>
        <BackArrow />
        <CatalogFilter />
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}

export default CatalogScreen;
