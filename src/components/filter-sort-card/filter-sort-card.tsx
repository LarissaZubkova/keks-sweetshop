import { FilterSortType } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortingTypeByRating } from '../../store/filters-process/filters-process.selector';
import { setSortingTypeByRating } from '../../store/filters-process/filters-process.slice';

type FilterSortCardProps = {
    type: FilterSortType;
    index: number;
}

function FilterSortCard({type, index}: FilterSortCardProps): JSX.Element {
  const dispatch = useAppDispatch();
  const sortTypeRating = useAppSelector(getSortingTypeByRating);

  return (
    <li className="filter-sort__filter-item">
      <div className="custom-toggle custom-toggle--sorting">
        <input
          type="radio"
          id={`review-sort-${index}`}
          name="review-sort"
          checked={sortTypeRating === type}
          onChange={() => dispatch(setSortingTypeByRating(type))}
        />
        <label className="custom-toggle__label" htmlFor={`review-sort-${index}`}>{type}</label>
      </div>
    </li>
  );
}

export default FilterSortCard;
