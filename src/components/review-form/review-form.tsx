function ReviewForm(): JSX.Element {
  return (
    <section className="review-form">
      <div className="container">
        <div className="review-form__wrapper">
          <h2 className="review-form__title">оставить отзыв</h2>
          <div className="review-form__form">
            <form action="#" method="post" autoComplete="off">
              <div className="review-form__inputs-wrapper">
                <div className="custom-input">
                  <label><span className="custom-input__label">Достоинства</span>
                    <input type="text" name="advantages" placeholder="Достоинства" required />
                  </label>
                </div>
                <div className="custom-input">
                  <label><span className="custom-input__label">Недостатки</span>
                    <input type="text" name="disadvantages" placeholder="Недостатки" required />
                  </label>
                </div>
              </div>
              <div className="review-form__submit-wrapper">
                <div className="review-form__rating-wrapper">
                  <div className="input-star-rating">
                    <input type="radio" name="input-star-rating" id="input-star-rating-5" value="5" aria-label="5 звезд" />
                    <label htmlFor="input-star-rating-5">
                      <svg width="40" height="40" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                    <input type="radio" name="input-star-rating" id="input-star-rating-4" value="4" aria-label="4 звезды" />
                    <label htmlFor="input-star-rating-4">
                      <svg width="40" height="40" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                    <input type="radio" name="input-star-rating" id="input-star-rating-3" value="3" aria-label="3 звезды" />
                    <label htmlFor="input-star-rating-3">
                      <svg width="40" height="40" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                    <input type="radio" name="input-star-rating" id="input-star-rating-2" value="2" aria-label="2 звезды" />
                    <label htmlFor="input-star-rating-2">
                      <svg width="40" height="40" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                    <input type="radio" name="input-star-rating" id="input-star-rating-1" value="1" aria-label="1 звезда" />
                    <label htmlFor="input-star-rating-1">
                      <svg width="40" height="40" aria-hidden="true">
                        <use xlinkHref="#icon-star"></use>
                      </svg>
                    </label>
                  </div>
                </div>
                <div className="review-form__button-wrapper">
                  <button className="btn review-form__button" type="submit">Отправить отзыв</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewForm;
