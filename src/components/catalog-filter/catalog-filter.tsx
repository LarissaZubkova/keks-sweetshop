import { FirstLevelFilter } from '../../const';
import FilterFirstLevel from '../filter-first-level/filter-first-level';

function CatalogFilter() {
  return (
    <div className="catalog-filter">
      <div className="container">
        <div className="catalog-filter__first-level">
          <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
          <ul className="catalog-filter__list catalog-filter__list--first-level">
            {Object.values(FirstLevelFilter).map((filter) => <FilterFirstLevel key={filter} filter={filter} />)}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CatalogFilter;
