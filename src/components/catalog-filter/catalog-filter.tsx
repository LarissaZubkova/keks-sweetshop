import { FirstLevelFilter, SecondLevelFilter } from '../../const';
import FilterSecondLevel from '../filter-second-level/filter-second-level';
import FilterFirstLevel from '../filter-first-level/filter-first-level';
import { SelectedFilters } from '../../types/cake';

type CatalogFilterProps = {
  selectedFilters: SelectedFilters;
  setSelectedFilters: ({firstLevel, secondLevel}: SelectedFilters) => void;
}

function CatalogFilter({selectedFilters, setSelectedFilters}: CatalogFilterProps) {
  return (
    <div className="catalog-filter">
      <div className="container">
        <div className="catalog-filter__first-level">
          <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
          <ul className="catalog-filter__list catalog-filter__list--first-level">
            {Object.values(FirstLevelFilter).map((filter) => <FilterFirstLevel key={filter} filter={filter} setSelectedFilters={setSelectedFilters} selectedFilter={selectedFilters.firstLevel} />)}
          </ul>
        </div>
        {selectedFilters.firstLevel &&
        <div className="catalog-filter__second-level">
          <h3 className="catalog-filter__title catalog-filter__title--second-level">начинки</h3>
          <ul className="catalog-filter__list catalog-filter__list--second-level">
            {Object.values(SecondLevelFilter).map((filter, index) => <FilterSecondLevel key={filter} filter={filter} index={index + 1} />)}
          </ul>
        </div>}
      </div>
    </div>
  );
}

export default CatalogFilter;
