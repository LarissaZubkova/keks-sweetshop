import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import RandomMain from '../../components/random-main/random-main';
import LastReview from '../../components/last-review/last-review';
import MapDisplay from '../../components/map-display/map-display';
import Footer from '../../components/footer/footer';

function MainScreen() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <RandomMain />
        <LastReview />
        <MapDisplay />
      </main>
      <Footer />
    </div>
  );
}

export default MainScreen;
