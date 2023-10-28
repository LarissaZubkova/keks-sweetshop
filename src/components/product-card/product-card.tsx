import { CakeCard } from '../../types/product';
import { getFormat } from '../../utils/utils';

type CakeCardProps = {
    cake: CakeCard;
}

function ProductCard({cake}: CakeCardProps) {
  const {previewImage, previewImageWebp, title, price, isNew} = cake;
  return (
    <li className="catalog__item">
      <div className="card-item card-item--big">
        <a className="card-item__img-link" href="#">
          <div className="card-item__img-wrapper">
            <picture>
              <source type="image/webp" srcSet={previewImageWebp} />
              <img src={previewImage} width={326} height={332}alt={title} />
            </picture>
          </div>
          {isNew && <span className="card-item__label">Новинка</span>}
        </a>
        <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
          <svg width="51" height="41" aria-hidden="true">
            <use xlinkHref="#icon-like"></use>
          </svg>
        </button>
        <span className="card-item__price">{`${getFormat(price)} p`}</span>
        <a className="card-item__link" href="#">
          <h3 className="card-item__title"><span>{title}</span></h3>
        </a>
      </div>
    </li>
  );
}

export default ProductCard;
