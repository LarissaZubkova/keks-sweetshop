import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';

function ProductDetails(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const navigate = useNavigate();
  return (
    <section className="item-details">
      <div className="container">
        <div className="item-details__wrapper">
          <div className="item-details__top-wrapper">
            <h2 className="item-details__name">Чизкейк Лимонный</h2><span className="item-details__price">4 100 р</span>
          </div>
          <div className="item-details__weight-wrapper"><span className="item-details__weight">1 300 грамм</span></div>
          <div className="item-details__bottom-wrapper">
            <div className="item-details__image-wrapper">
              <picture>
                <source type="image/webp" srcSet="img/content/lemon-pie.webp, img/content/lemon-pie@2x.webp 2x" />
                <img src="img/content/lemon-pie.jpg" srcSet="img/content/lemon-pie@2x.jpg 2x" width={241} height={245} alt="Чизкейк лимонный" />
              </picture><span className="item-details__label">Новинка</span>
            </div>
            <div className="item-details__review-wrapper">
              <div className="star-rating star-rating--big">
                <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                  <use xlinkHref="#icon-star"></use>
                </svg>
                <svg className="star-rating__star star-rating__star--active" width="30" height="30" aria-hidden="true">
                  <use xlinkHref="#icon-star"></use>
                </svg><span className="star-rating__count">26</span>
              </div>
              <div className="item-details__text-wrapper"><span className="item-details__text">Цитрусовый десерт c тонким сливочным вкусом, лёгкой свежестью и низким содержанием калорий сд</span>
                <button className="item-details__more"><span className="visually-hidden">Читать полностью</span>
                  <svg width="27" height="17" aria-hidden="true">
                    <use xlinkHref="#icon-more"></use>
                  </svg>
                </button>
              </div>
              <div className="item-details__button-wrapper">
                <button className="item-details__like-button">
                  <svg width="45" height="37" aria-hidden="true">
                    <use xlinkHref="#icon-like"></use>
                  </svg><span className="visually-hidden">Понравилось</span>
                </button>
                <button
                  className="btn btn--second"
                  type="button"
                  onClick={(() => {
                    if (authorizationStatus !== AuthorizationStatus.Auth) {
                      navigate(AppRoute.LogIn);
                    }
                  })}
                >Оставить отзыв
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
