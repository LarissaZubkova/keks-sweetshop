import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchProductCardAction, fetchReviewsAction } from '../../store/api-actions';
import { getProductCardErrorStatus } from '../../store/product-card-process/product-card-process.selector';
import { getReviewsErrorStatus, getReviews } from '../../store/review-process/review-process.selector';
import { getSortingTypeByRating, getSortingTypeByDate } from '../../store/filters-process/filters-process.selector';
import { sortByDate, sortByRating } from '../../utils/utils';
import { DEFAULT_REVIEWS_COUNT } from '../../const';
import { resetSorting } from '../../store/filters-process/filters-process.slice';
import BackArrow from '../../components/back-arrow/back-arrow';
import CatalogComments from '../../components/catalog-comments/catalog-comments';
import FilterSort from '../../components/filter-sort/filter-sort';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import ProductDetails from '../../components/product-details/product-details';
import ReviewForm from '../../components/review-form/review-form';
import ErrorScreen from '../error-screen/error-screen';
import ReviewsError from '../../components/reviews-error/reviews-error';
import NoReview from '../../components/no-review/no-review';

function ProductScreen():JSX.Element {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(getReviews);
  const hasProductError = useAppSelector(getProductCardErrorStatus);
  const hasReviewsError = useAppSelector(getReviewsErrorStatus);
  const sortTypeRating = useAppSelector(getSortingTypeByRating);
  const sortTypeDate = useAppSelector(getSortingTypeByDate);
  const {id} = useParams();
  const [reviewsCount, setReviewsCount] = useState(DEFAULT_REVIEWS_COUNT);
  const [isReviewForm, setIsReviewForm] = useState(false);
  const [sortedReviews, setSortedReviews] = useState(sortByDate[sortTypeDate](reviews));
  const sortedByRating = sortByRating[sortTypeRating](reviews);
  const sortedByDate = sortByDate[sortTypeDate](sortedByRating);

  useEffect(() => {
    dispatch(resetSorting);
  }, [dispatch]);

  useEffect(() => {
    setReviewsCount(DEFAULT_REVIEWS_COUNT);
  }, [sortTypeRating, setReviewsCount]);

  useEffect(() => {
    setSortedReviews(sortedByRating);
  }, [sortTypeRating]);

  useEffect(() => {
    setSortedReviews(sortedByDate);
  }, [sortTypeDate]);

  useEffect(() => {
    if (id) {
      dispatch(fetchProductCardAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch]);

  if (hasProductError || !id) {
    <ErrorScreen />;
  }

  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">Карточка: пользователь не авторизован</h1>
        <BackArrow />
        <ProductDetails setIsReviewForm={setIsReviewForm} isReviewForm={isReviewForm} />
        {isReviewForm && <ReviewForm id={id} />}
        {hasReviewsError && <ReviewsError />}
        {!reviews.length && !hasReviewsError && <NoReview />}
        {reviews.length && !hasReviewsError &&
          <>
            <FilterSort />
            <CatalogComments reviews={sortedReviews} reviewsCount={reviewsCount} setReviewsCount={setReviewsCount} />
          </>}
      </main>
      <Footer />
    </div>
  );
}

export default ProductScreen;
