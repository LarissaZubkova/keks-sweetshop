import { useAppDispatch } from '../../hooks';
import { fetchReviewsAction } from '../../store/api-actions';

type ReviewsErrorProps = {
  id: string | undefined;
}

function ReviewsError({id}: ReviewsErrorProps): JSX.Element{
  const dispatch = useAppDispatch();

  return (
    <section className="error-comments">
      <div className="container">
        <div className="error-comments__wrapper">
          <h2 className="error-comments__title">Не удалось загрузить комментарии</h2>
          <button
            className="btn error-comments__button"
            type="button"
            onClick={() => {
              if (id) {
                dispatch(fetchReviewsAction(id));
              }
            }}
          >Попробовать ещё
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReviewsError;
