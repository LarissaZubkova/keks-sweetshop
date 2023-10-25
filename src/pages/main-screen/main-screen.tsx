import Header from '../../components/header/header';
import Hero from '../../components/hero/hero';
import RandomMain from '../../components/random-main/random-main';
import LastReview from '../../components/last-review/last-review';
import Map from '../../components/map/map';
import Footer from '../../components/footer/footer';

function MainScreen() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <RandomMain />
        <LastReview />
        <Map />
      </main>
      <Footer />
    </div>
  );
}

export default MainScreen;
