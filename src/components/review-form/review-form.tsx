import classNames from 'classnames';
import { useAppDispatch } from '../../hooks';
import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { validatePositive, validateNegative } from '../../utils/utils';

function ReviewForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    rating: 0,
    positive: '',
    negative: '',
  });
  const [isFormValid, setIsFormValid] = useState({
    rating: true,
    positive: true,
    negative: true,
  });

  function displayAvailableDigits(digits: string): number {
    return 500 - digits.length;
  }

  const [digits, setDigits] = useState({
    positive: displayAvailableDigits(formData.positive),
    negative: displayAvailableDigits(formData.negative),
  });

  const handleFormDataChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;
    let parsedValue: string | number = value;

    if (name === 'rating') {
      parsedValue = Number(value);
    }

    setFormData({
      ...formData,
      [name]: parsedValue});

    setDigits({
      positive: displayAvailableDigits(formData.positive),
      negative: displayAvailableDigits(formData.negative),
    });

    //setValidComment(isCommentValid);
  };


  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(Boolean(formData.rating), validatePositive(formData.positive, formData.rating), validateNegative(formData.negative, formData.rating));

    setIsFormValid({
      rating: Boolean(formData.rating),
      positive: validatePositive(formData.positive, formData.rating),
      negative: validateNegative(formData.negative, formData.rating),
    });

    // if (rating && isCommentValid) {
    //   dispatch(fetchSendReviewAction({id, rating, comment}));
    // }

    // if(!isSending && isCommentSendingError) {
    //   setHasError(true);
    // }
  };

  return (
    <section className="review-form">
      <div className="container">
        <div className="review-form__wrapper">
          <h2 className="review-form__title">оставить отзыв</h2>
          <div className="review-form__form">
            <form
              action="#"
              method="post"
              autoComplete="off"
              onSubmit={handleFormSubmit}
            >
              <div className="review-form__inputs-wrapper">
                <div className={classNames('custom-input', {
                  'is-invalid' : !isFormValid.positive,
                  'is-valid' : isFormValid.positive
                })}
                >
                  <label><span className="custom-input__label">Достоинства</span>
                    <input
                      type="text"
                      name="positive"
                      placeholder="Достоинства"
                      onChange={handleFormDataChange}
                    />
                  </label>
                  {!isFormValid.positive && <span className="custom-input__message">заполните поле</span>}
                  {formData.rating > 3 && isFormValid.positive && <span className="custom-input__message">осталось {digits.positive} символов</span>}
                </div>
                <div className={classNames('custom-input', {
                  'is-invalid' : !isFormValid.negative,
                  'is-valid' : isFormValid.negative
                })}
                >
                  <label><span className="custom-input__label">Недостатки</span>
                    <input
                      type="text"
                      name="negative"
                      placeholder="Недостатки"
                      onChange={handleFormDataChange}
                    />
                  </label>
                  {!isFormValid.negative && digits.negative === 500 && <span className="custom-input__message">заполните поле</span>}
                  {formData.rating < 4 && formData.rating > 0 && formData.negative.length > 0 && <span className="custom-input__message">осталось {digits.negative} символов</span>}
                </div>
              </div>
              <div className="review-form__submit-wrapper">
                <div className="review-form__rating-wrapper">
                  <div className="input-star-rating" >
                    {(Array.from({length: 5}, (_, k) => (
                      <Fragment key={`rating__${k}`} >
                        <input
                          type="radio"
                          name="rating"
                          id={`input-star-rating-${k + 1}`}
                          value={k + 1}
                          aria-label={`${k + 1} звезд`}
                          checked={formData.rating === (k + 1)}
                          onChange={handleFormDataChange}
                          required={!formData.rating}
                        />
                        <label htmlFor={`input-star-rating-${k + 1}`} >
                          <svg width={40} height={40} aria-hidden="true">
                            <use xlinkHref="#icon-star"></use>
                          </svg>
                        </label>
                      </Fragment>
                    ))).reverse()}
                  </div>
                </div>
                <div className="review-form__button-wrapper">
                  <button
                    className="btn review-form__button"
                    type="submit"
                    disabled={!formData.rating}
                  >Отправить отзыв
                  </button>
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
