import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import RandomMain from '../../components/random-main/random-main';
import LastReview from '../../components/last-review/last-review';
import Map from '../../components/map/map';
import Footer from '../../components/footer/footer';
import ErrorScreen from '../error-screen/error-screeen';
import { useAppSelector } from '../../hooks';
import { getProductsErrorStatus } from '../../store/products-process/products-process.selector';

function MainScreen() {
  const hasError = useAppSelector(getProductsErrorStatus);

  return (
    <div className="wrapper">
      <Header />
      {hasError ?
        <ErrorScreen /> :
        <main>
          <Hero />
          <RandomMain />
          <LastReview />
          <Map />
        </main>}
      <Footer />
    </div>
  );
}

export default MainScreen;
