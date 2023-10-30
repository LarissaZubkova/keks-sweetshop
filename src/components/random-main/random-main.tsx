import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import { getProducts, getProductsLoadingStatus } from '../../store/products-process/products-process.selector';
import { getRandomCakes } from '../../utils/utils';
import Loading from '../loading/loading';
import RandomCard from '../random-card/random-card';

function RandomMain() {
  const cakes = useAppSelector(getProducts);
  const isLoading = useAppSelector(getProductsLoadingStatus);

  if (isLoading) {
    return <Loading />;
  }

  const randomCakes = getRandomCakes(cakes);

  return (
    <section className="random-main">
      <div className="container">
        <h2 className="random-main__title">кексы</h2>
        <ul className="random-main__list">
          {randomCakes && randomCakes.map((cake) => <RandomCard key={cake.id} cake={cake} />)}
          <li className="random-main__item">
            <Link className="random-main__link" to={AppRoute.Catalog}>
              <div className="random-main__icon-wrapper">
                <div className="random-main__icon">
                  <svg width={120} height={130} aria-hidden="true">
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
