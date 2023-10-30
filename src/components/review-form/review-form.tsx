import classNames from 'classnames';
import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchReviewsAction, fetchSendReviewAction } from '../../store/api-actions';
import { getReviewSendingStatus, getSendingErrorStatus } from '../../store/review-process/review-process.selector';
import { displayAvailableDigits, validateNegative, validatePositive } from '../../utils/utils';
import { Rating, STARS_COUNT } from '../../const';

type ReviewFormProps = {
  id: string | undefined;
}

function ReviewForm({id}: ReviewFormProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isSending = useAppSelector(getReviewSendingStatus);
  const hasSendingError = useAppSelector(getSendingErrorStatus);

  const [hasError, setHasError] = useState(false);
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

  useEffect(() => {
    setIsFormValid({
      rating: Boolean(formData.rating),
      positive: validatePositive(formData.positive, formData.rating),
      negative: validateNegative(formData.negative, formData.rating),
    });
  }, [formData]);

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
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (isFormValid.positive && isFormValid.negative && id) {
      dispatch(fetchSendReviewAction({id, formData}));
      dispatch(fetchReviewsAction(id));
    }

    if(!isSending && !hasError) {
      setHasError(false);
    }

    if(!isSending && hasSendingError) {
      setHasError(true);
    }

    if (!isSending && !hasError) {
      setFormData({
        rating: 0,
        positive: '',
        negative: '',
      });
    }

  };

  return (
    <section className="review-form">
      <div className="container">
        <div className="review-form__wrapper">
          <h2 className="review-form__title">оставить отзыв</h2>
          {hasError && <span style={{color: '#d94236', fontSize: '24px'}}> комментарий не отправлен</span>}
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
                      value={formData.positive}
                      placeholder="Достоинства"
                      onChange={handleFormDataChange}
                      disabled={isSending}
                    />
                  </label>
                  {!isFormValid.positive && <span className="custom-input__message">заполните поле</span>}
                  {formData.rating > Rating.BAD && isFormValid.positive && <span className="custom-input__message">осталось {digits.positive} символов</span>}
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
                      value={formData.negative}
                      placeholder="Недостатки"
                      onChange={handleFormDataChange}
                      disabled={isSending}
                    />
                  </label>
                  {!isFormValid.negative && <span className="custom-input__message">заполните поле</span>}
                  {formData.rating < Rating.GOOD && formData.rating > 0 && formData.negative.length > 0 && <span className="custom-input__message">осталось {digits.negative} символов</span>}
                </div>
              </div>
              <div className="review-form__submit-wrapper">
                <div className="review-form__rating-wrapper">
                  <div className="input-star-rating" >
                    {(Array.from({length: STARS_COUNT}, (_, k) => (
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
                    disabled={!formData.rating || isSending}
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
