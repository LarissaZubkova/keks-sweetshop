import { DEFAULT_REVIEWS_COUNT } from '../../const';
import { useAppSelector } from '../../hooks';
import { getReviewsLoadingStatus } from '../../store/review-process/review-process.selector';
import { Review } from '../../types/review';
import Loading from '../loading/loading';
import NoSortedReviews from '../no-sorted-reviews/no-sorted-reviews';
import ReviewCard from '../review/review';

type CatalogCommentsProps = {
  reviews: Review[];
  reviewsCount: number;
  setReviewsCount: (count: number) => void;
}

function CatalogComments({reviews, reviewsCount, setReviewsCount}: CatalogCommentsProps): JSX.Element{
  const isLoading = useAppSelector(getReviewsLoadingStatus);
  const currentReviews = reviews.slice(0, reviewsCount);

  if (isLoading) {
    return <Loading />;
  }

  if (currentReviews.length === 0) {
    return <NoSortedReviews />;
  }

  return (
    <section className="comments">
      <h2 className="visually-hidden">Список комментариев</h2>
      <div className="container">
        <div className="comments__wrapper">
          {currentReviews.map((review) => <ReviewCard key={review.id} review={review} />)}
        </div>
        {reviewsCount < reviews.length &&
          <div className="comments__show-more">
            <button
              className="btn btn--second comments__button"
              type="button"
              onClick={() => setReviewsCount(reviewsCount + DEFAULT_REVIEWS_COUNT)}
            >Показать еще
            </button>
          </div>}
      </div>
    </section>
  );
}

export default CatalogComments;
