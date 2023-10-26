function Review() :JSX.Element {
  return (
    <div className="review">
      <div className="review__inner-wrapper">
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
          <p className="review__text">Отличный сервис! Очень вкусный, сочный и яркий торт. Удобная коробка для транспортировки. Свежие фрукты и съедобный дизайн.</p>
          <p className="review__text">Недостатков нет, обязательно будем заказывать и приходить в Кексик</p>
        </div>
        <div className="review__image-wrapper">
          <picture>
            <source type="image/webp" srcSet="img/content/review-1.webp, img/content/review-1@2x.webp 2x"/>
            <img src="img/content/review-1.jpg" srcSet="img/content/review-1@2x.jpg 2x" width="162" height="162" alt="Кот"/>
          </picture>
        </div>
      </div>
    </div>
  );
}

export default Review;
