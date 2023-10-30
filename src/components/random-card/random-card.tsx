import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { CakeCard } from '../../types/product';
import FavoriteButton from '../favorite-button/favorite-button';

type RandomCardProps = {
  cake: CakeCard;
}

function RandomCard({cake}: RandomCardProps): JSX.Element {
  const {previewImage, previewImageWebp, title, isNew, id } = cake;

  return (
    <li className="random-main__item">
      <div className="card-item">
        <Link className="card-item__img-link" to={AppRoute.Product.replace(':id', id)}>
          <div className="card-item__img-wrapper">
            <picture>
              <source type="image/webp" srcSet={previewImageWebp} />
              <img src={previewImage} width={241} height={245} alt={title} />
            </picture>
          </div>
          {isNew && <span className="card-item__label">Новинка</span>}
        </Link>
        <FavoriteButton id={id} />
        <Link className="card-item__link" to={AppRoute.Product.replace(':id', id)}>
          <h3 className="card-item__title"><span>{title}</span></h3>
        </Link>
      </div>
    </li>
  );
}

export default RandomCard;
