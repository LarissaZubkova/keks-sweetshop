import classNames from 'classnames';
import { Fragment } from 'react';
import { STARS_COUNT } from '../../const';

type RatingProps = {
  rating: number;
}

function Rating({rating}: RatingProps) {
  return (
    Array.from({length: STARS_COUNT}, (_,i) => (
      <Fragment key={i}>
        <svg className={classNames('star-rating__star', {'star-rating__star--active' : rating > i})} width={30} height={30} aria-hidden="true">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </Fragment>
    ))
  );
}

export default Rating;
