import { useAppSelector } from '../../hooks';
import { getLastReview, getLastReviewErrorStatus } from '../../store/review-process/review-process.selector';
import Review from '../review/review';

function LastReview(): JSX.Element {
  const lastReview = useAppSelector(getLastReview);
  const hasError = useAppSelector(getLastReviewErrorStatus);

  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
        {hasError || !lastReview ? '' : <Review review={lastReview} isMain />}
      </div>
    </section>
  );
}
export default LastReview;
