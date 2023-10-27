import { LastReview } from '../../types/review';
import {Fragment} from 'react';
import { getDateFormat } from '../../utils/utils';
import classNames from 'classnames';

type ReviewProps = {
  review: LastReview;
  isMain?: boolean;
}

function Review({review, isMain}: ReviewProps) :JSX.Element {
  const {user, negative, positive, rating, isoDate} = review;

  return (
    <div className="review">
      <div className={classNames('review__inner-wrapper',
        {'review__inner-wrapper--border': isMain})}
      >
        <time className="review__date" dateTime={getDateFormat(isoDate).dateTime}>{getDateFormat(isoDate).ratingDate}</time><span className="review__author">Уважаемый(-ая) {user.name}</span>
        <div className="star-rating">
          {Array.from({length: 5}, (_,i) => (
            <Fragment key={i}>
              <svg className={classNames('star-rating__star', {'star-rating__star--active' : rating > i})} width={30} height={30} aria-hidden="true">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </Fragment>
          ))}
        </div>
        <div className="review__text-wrapper">
          <p className="review__text">{positive}</p>
          <p className="review__text">{negative}</p>
        </div>
        <div className="review__image-wrapper">
          <picture>
            <source type="image/webp" srcSet={user.avatarUrl}/>
            <img src={user.avatarUrl} width={162} height={162} alt="Кот"/>
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Review;
