import { FirstLevelFilter } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getFirstLevelFilter } from '../../store/filters-process/filters-process.selector';
import { setFirstLevelFilter, resetSecondFilter } from '../../store/filters-process/filters-process.slice';
import classNames from 'classnames';

type FilterFirstLevelProps = {
    filter: FirstLevelFilter;
}

function FilterFirstLevel({filter}: FilterFirstLevelProps) {
  const dispatch = useAppDispatch();
  const selectedFilter = useAppSelector(getFirstLevelFilter);

  return (
    <li className="catalog-filter__item catalog-filter__item--first-level">
      <button
        className={classNames('btn btn--filter-first-level', {'is-active': selectedFilter === filter})}
        type="button"
        onClick={() => {
          if (selectedFilter === filter) {
            dispatch(setFirstLevelFilter(null));
            dispatch(resetSecondFilter());
          } else {
            dispatch(setFirstLevelFilter(filter));
          }
        }}
      >{filter}
      </button>
    </li>
  );
}

export default FilterFirstLevel;

