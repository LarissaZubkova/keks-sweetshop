import classNames from 'classnames';
import { Fragment } from 'react';

type RatingProps = {
  rating: number;
}

function Rating({rating}: RatingProps) {
  return (
    Array.from({length: 5}, (_,i) => (
      <Fragment key={i}>
        <svg className={classNames('star-rating__star', {'star-rating__star--active' : rating > i})} width={30} height={30} aria-hidden="true">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </Fragment>
    ))
  );
}

export default Rating;
