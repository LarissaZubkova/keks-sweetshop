import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { getProductsErrorStatus } from '../../store/products-process/products-process.selector';
import { getLastReviewErrorStatus } from '../../store/review-process/review-process.selector';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import LastReview from '../../components/last-review/last-review';
import MapDisplay from '../../components/map-display/map-display';
import RandomMain from '../../components/random-main/random-main';


function MainScreen(): JSX.Element {
  const hasCakesError = useAppSelector(getProductsErrorStatus);
  const hasLastReviewError = useAppSelector(getLastReviewErrorStatus);

  return (
    <div className="wrapper">
      <Helmet>
        <title>Кондитерская Кекс - Главная</title>
      </Helmet>
      <Header />
      <main>
        <Hero />
        {!hasCakesError && <RandomMain />}
        {!hasLastReviewError && <LastReview />}
        <MapDisplay />
      </main>
      <Footer />
    </div>
  );
}

export default MainScreen;
