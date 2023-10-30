import { FirstLevelFilter, TypeByFirstLevelFilter } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchCategoriesAction } from '../../store/api-actions';
import { getFirstLevelFilter } from '../../store/filters-process/filters-process.selector';
import FilterFirstLevel from '../filter-first-level/filter-first-level';
import FilterSecondLevel from '../filter-second-level/filter-second-level';

function CatalogFilter() {
  const dispatch = useAppDispatch();
  const firstLevel = useAppSelector(getFirstLevelFilter);
  const selectedFilter = useAppSelector(getFirstLevelFilter) as FirstLevelFilter;
  const types = TypeByFirstLevelFilter[selectedFilter];

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  return (
    <div className="catalog-filter">
      <div className="container">
        <div className="catalog-filter__first-level">
          <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
          <ul className="catalog-filter__list catalog-filter__list--first-level">
            {Object.values(FirstLevelFilter).map((filter) => <FilterFirstLevel key={filter} filter={filter} />)}
          </ul>
        </div>
        {firstLevel &&
        <div className="catalog-filter__second-level">
          <h3 className="catalog-filter__title catalog-filter__title--second-level">начинки</h3>
          <ul className="catalog-filter__list catalog-filter__list--second-level">
            {types.map((filter, index) => <FilterSecondLevel key={filter} filter={filter} index={index + 1} />)}
          </ul>
        </div>}
      </div>
    </div>
  );
}

export default CatalogFilter;
