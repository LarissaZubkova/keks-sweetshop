import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Hero(): JSX.Element {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__img-wrapper">
          <img className="hero__img" src="img/svg/hero-keks.svg" width={727} height={569} alt="Картика кота." />
        </div>
        <div className="hero__wrapper">
          <p className="hero__subtitle">Твоя пушистая кондитерская</p>
          <p className="hero__title">КЕКС</p>
          <div className="hero__button-wrapper">
            <Link className="btn" to={AppRoute.Catalog}>Скорее смотреть</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
