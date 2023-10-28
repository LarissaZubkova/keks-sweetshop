import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, DESCRIPTION_MAX_LENGTH } from '../../const';
import { getFormat } from '../../utils/utils';
import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { getProductCard, getProductCardLoadingStatus } from '../../store/product-card-process/product-card-process.selector';
import { useState } from 'react';
import classNames from 'classnames';
import Loading from '../loading/loading';
import Rating from '../rating/rating';
import FavoriteButton from '../favorite-button/favorite-button';

type ProductDetailsProps = {
  setIsReviewForm: (data: boolean) => void;
  isReviewForm: boolean;
}

function ProductDetails({setIsReviewForm, isReviewForm}: ProductDetailsProps): JSX.Element {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const product = useAppSelector(getProductCard);
  const isLoading = useAppSelector(getProductCardLoadingStatus);
  const [isFullDescription, setIsFullDescription] = useState(false);

  if (isLoading || !product) {
    return <Loading />;
  }

  const {title, price, weight, previewImage, previewImageWebp, isNew, reviewCount, rating, description, id} = product;

  return (
    <section className={classNames('item-details', {'item-details--form-open' : isReviewForm})}>
      <div className="container">
        <div className="item-details__wrapper">
          <div className="item-details__top-wrapper">
            <h2 className="item-details__name">{title}</h2><span className="item-details__price">{`${getFormat(price)} p`}</span>
          </div>
          <div className="item-details__weight-wrapper"><span className="item-details__weight">{`${getFormat(weight)} грамм`}</span></div>
          <div className="item-details__bottom-wrapper">
            <div className="item-details__image-wrapper">
              <picture>
                <source type="image/webp" srcSet={previewImageWebp} />
                <img src={previewImage} srcSet={previewImage} width={241} height={245} alt={title} />
              </picture>
              {isNew && <span className="item-details__label">Новинка</span>}
            </div>
            <div className="item-details__review-wrapper">
              <div className="star-rating star-rating--big">
                {<Rating rating={Math.round(rating)} />}
                <span className="star-rating__count">{reviewCount}</span>
              </div>
              <div className="item-details__text-wrapper"><span className="item-details__text">{isFullDescription ? description : description.slice(0, DESCRIPTION_MAX_LENGTH)}</span>
                <button
                  className={classNames('item-details__more', {
                    'visually-hidden' : isFullDescription || description.length <= DESCRIPTION_MAX_LENGTH
                  })}
                  onClick={() => setIsFullDescription(true)}
                >
                  <span className="visually-hidden">Читать полностью</span>
                  <svg width={27}height={17} aria-hidden="true">
                    <use xlinkHref="#icon-more"></use>
                  </svg>
                </button>
              </div>
              <div className="item-details__button-wrapper">
                <FavoriteButton id={id} isSmall/>
                <button
                  className="btn btn--second"
                  type="button"
                  onClick={(() => {
                    if (authorizationStatus !== AuthorizationStatus.Auth) {
                      navigate(AppRoute.LogIn);
                      return;
                    }
                    if (isReviewForm) {
                      setIsReviewForm(false);
                    } else {
                      setIsReviewForm(true);
                    }
                  })}
                >{isReviewForm ? 'Отменить отзыв' : 'Оставить отзыв'}
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
