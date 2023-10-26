import { useNavigate } from 'react-router-dom';
import { CakeCard } from '../../types/cake';
import { AppRoute } from '../../const';

type RandomCardProps = {
  cake: CakeCard;
}

function RandomCard({cake}: RandomCardProps): JSX.Element {
  const navigate = useNavigate();

  const {previewImage, previewImageWebp, title, isNew, id} = cake;
  return (
    <li
      className="random-main__item"
      onClick={() => {
        navigate(AppRoute.Product.replace(':id', id));
      }}
    >
      <div className="card-item">
        <a className="card-item__img-link" href="#">
          <div className="card-item__img-wrapper">
            <picture>
              <source type="image/webp" srcSet={previewImageWebp} />
              <img src={previewImage} width={241} height={245} alt={title} />
            </picture>
          </div>
          {isNew && <span className="card-item__label">Новинка</span>}
        </a>
        <button className="card-item__favorites card-item__favorites--active"><span className="visually-hidden">Добавить в избранное</span>
          <svg width={51} height={41} aria-hidden="true">
            <use xlinkHref="#icon-like"></use>
          </svg>
        </button>
        <a className="card-item__link" href="#">
          <h3 className="card-item__title"><span>{title}</span></h3>
        </a>
      </div>
    </li>
  );
}

export default RandomCard;
