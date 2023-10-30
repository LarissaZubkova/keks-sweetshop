import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CakeCard } from '../../types/product';
import { getFormat } from '../../utils/utils';
import FavoriteButton from '../favorite-button/favorite-button';

type ProductCardProps = {
    cake: CakeCard;
}

function ProductCard({cake}: ProductCardProps): JSX.Element {
  const {previewImage, previewImageWebp, title, price, isNew, id} = cake;

  return (
    <li className="catalog__item">
      <div className="card-item card-item--big">
        <Link className="card-item__img-link" to={AppRoute.Product.replace(':id', id)}>
          <div className="card-item__img-wrapper">
            <picture>
              <source type="image/webp" srcSet={previewImageWebp} />
              <img src={previewImage} width={326} height={332}alt={title} />
            </picture>
          </div>
          {isNew && <span className="card-item__label">Новинка</span>}
        </Link>
        <FavoriteButton id={id} />
        <span className="card-item__price">{`${getFormat(price)} p`}</span>
        <Link className="card-item__link" to={AppRoute.Product.replace(':id', id)}>
          <h3 className="card-item__title"><span>{title}</span></h3>
        </Link>
      </div>
    </li>
  );
}

export default ProductCard;
