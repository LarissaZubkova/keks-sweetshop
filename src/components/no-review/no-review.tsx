function NoReview(): JSX.Element {
  return (
    <section className="empty-results">
      <div className="container">
        <div className="empty-results__wrapper">
          <h2 className="empty-results__title">Про этот кекс нам ничего не рассказали. Вы можете оставить свой отзыв первым.</h2>
          <svg width={180} height={166} aria-hidden="true">
            <use xlinkHref="#icon-cake"></use>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default NoReview;
