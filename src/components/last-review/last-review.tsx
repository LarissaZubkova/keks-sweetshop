function LastReview() {
  return (
    <section className="last-review">
      <div className="container">
        <h2 className="last-review__title">последний отзыв</h2>
        <div className="review">
          <div className="review__inner-wrapper review__inner-wrapper--border">
            <time className="review__date" dateTime="2023-05-15">15.05</time><span className="review__author">Уважаемый(-ая) Кот</span>
            <div className="star-rating">
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
              </svg>
            </div>
            <div className="review__text-wrapper">
              <p className="review__text">&quot;Отличный сервис! Очень вкусный, сочный и&nbsp;яркий торт. Удобная коробка для транспортировки. Свежие фрукты и&nbsp;съедобный дизайн.</p>
              <p className="review__text">Недостатков нет, обязательно будем заказывать и&nbsp;приходить в&nbsp;Кексик</p>
            </div>
            <div className="review__image-wrapper">
              <picture>
                <source type="image/webp" srcSet="img/content/review-1.webp, img/content/review-1@2x.webp 2x" />
                <img src="img/content/review-1.jpg" srcSet="img/content/review-1@2x.jpg 2x" width="162" height="162" alt="Кот" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default LastReview;
