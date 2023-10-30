import { useAppSelector } from '../../hooks';
import { getLastReviewErrorStatus } from '../../store/review-process/review-process.selector';
import { Review } from '../../types/review';
import { getDateFormat } from '../../utils/utils';
import classNames from 'classnames';
import Loading from '../loading/loading';
import Rating from '../rating/rating';

type ReviewProps = {
  review: Review;
  isMain?: boolean;
}

function ReviewCard({review, isMain}: ReviewProps) :JSX.Element {
  const hasError = useAppSelector(getLastReviewErrorStatus);

  if (!review || hasError) {
    return <Loading />;
  }

  const {user, negative, positive, rating, isoDate} = review;

  return (
    <div className="review">
      <div className={classNames('review__inner-wrapper',
        {'review__inner-wrapper--border': isMain})}
      >
        <time className="review__date" dateTime={getDateFormat(isoDate).dateTime}>{getDateFormat(isoDate).ratingDate}</time><span className="review__author">Уважаемый(-ая) {user.name}</span>
        <div className="star-rating">
          {<Rating rating={Math.round(rating)} />}
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

export default ReviewCard;
