import { CakeCard } from '../../types/Cake';

type CakeCardProps = {
    cake: CakeCard;
}

function ProductCard({cake}: CakeCardProps) {
  return (
    <li className="catalog__item">
      <div className="card-item card-item--big">
        <a className="card-item__img-link" href="#">
          <div className="card-item__img-wrapper">
            <picture>
              <source type="image/webp" srcSet="img/content/blueberry-cake.webp, img/content/blueberry-cake@2x.webp 2x" />
              <img src={cake.previewImage} srcSet="img/content/blueberry-cake@2x.jpg 2x" width="326" height="332" alt="Торт голубика." />
            </picture>
          </div><span className="card-item__label">Новинка</span>
        </a>
        <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
          <svg width="51" height="41" aria-hidden="true">
            <use xlinkHref="#icon-like"></use>
          </svg>
        </button><span className="card-item__price">9 300 p</span>
        <a className="card-item__link" href="#">
          <h3 className="card-item__title"><span>Торт Голубика</span></h3>
        </a>
      </div>
    </li>
  );
}

export default ProductCard;
