import { FilterSortDate, FilterSortType } from '../../const';
import FilterSortCard from '../filter-sort-card/filter-sort-card';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSortingTypeByDate, getSortingTypeByRating } from '../../store/filters-process/filters-process.selector';
import { setSortingTypeByDate } from '../../store/filters-process/filters-process.slice';

function FilterSort(): JSX.Element {
  const dispatch = useAppDispatch();
  const sortTypeRating = useAppSelector(getSortingTypeByRating);
  const sortTypeDate = useAppSelector(getSortingTypeByDate);

  return (
    <div className="filter-sort">
      <div className="container">
        <div className="filter-sort__inner">
          <div className="filter-sort__filter-wrap">
            <h3 className="filter-sort__filter-title">Показать с рейтингом</h3>
            <div className="filter-sort__filter">
              <button
                className="filter-sort__filter-btn"
                type="button"
              >{sortTypeRating}
                <svg className="filter-sort__filter-icon" width={14} height={15} aria-hidden="true">
                  <use xlinkHref="#icon-polygon"></use>
                </svg>
              </button>
              <ul className="filter-sort__filter-list">
                {Object.values(FilterSortType).map((type, index) => <FilterSortCard key={type} type={type} index={index + 1} />)}
              </ul>
            </div>
          </div>
          <div className="filter-sort__sort-wrap">
            <h3 className="filter-sort__sort-title">Сортировать по дате</h3>
            <div className="filter-sort__sort-btns-wrap">
              {Object.values(FilterSortDate).map((filter) => (
                <button
                  className={classNames(`filter-sort__sort-btn filter-sort__sort-btn--${filter === FilterSortDate.Top ? 'inc' : 'desc'}`,
                    {'filter-sort__sort-btn--active' : sortTypeDate === filter})}
                  type="button"
                  aria-label={filter}
                  key={filter}
                  onClick={() => dispatch(setSortingTypeByDate(filter))}
                >
                  <svg className="filter-sort__sort-icon" width={19} height={13} aria-hidden="true">
                    <use xlinkHref="#icon-chevron-top"></use>
                  </svg>
                </button>)
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSort;
