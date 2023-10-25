import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function RandomMain() {
  return (
    <section className="random-main">
      <div className="container">
        <h2 className="random-main__title">кексы</h2>
        <ul className="random-main__list">
          <li className="random-main__item">
            <div className="card-item">
              <a className="card-item__img-link" href="#">
                <div className="card-item__img-wrapper">
                  <picture>
                    <source type="image/webp" srcSet="img/content/blueberry-cake.webp, img/content/blueberry-cake@2x.webp 2x" />
                    <img src="img/content/blueberry-cake.jpg" srcSet="img/content/blueberry-cake@2x.jpg 2x" width="241" height="245" alt="Торт голубика." />
                  </picture>
                </div><span className="card-item__label">Новинка</span>
              </a>
              <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
                <svg width="51" height="41" aria-hidden="true">
                  <use xlinkHref="#icon-like"></use>
                </svg>
              </button>
              <a className="card-item__link" href="#">
                <h3 className="card-item__title"><span>Торт Голубика</span></h3>
              </a>
            </div>
          </li>
          <li className="random-main__item">
            <Link className="random-main__link" to={AppRoute.Catalog}>
              <div className="random-main__icon-wrapper">
                <div className="random-main__icon">
                  <svg width="120" height="130" aria-hidden="true">
                    <use xlinkHref="#icon-keks"></use>
                  </svg>
                </div>
              </div>
              <h3 className="random-main__subtitle" >Все кексы</h3>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default RandomMain;
