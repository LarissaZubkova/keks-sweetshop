import { FirstLevelFilter } from '../../const';
import { SelectedFilters } from '../../types/cake';
import classNames from 'classnames';

type FilterFirstLevelProps = {
    filter: FirstLevelFilter;
    selectedFilter: FirstLevelFilter | null;
    setSelectedFilters: ({firstLevel, secondLevel}: SelectedFilters) => void;
}

function FilterFirstLevel({filter, selectedFilter, setSelectedFilters}: FilterFirstLevelProps) {
  return (
    <li className="catalog-filter__item catalog-filter__item--first-level">
      <button
        className={classNames('btn btn--filter-first-level', {'is-active': selectedFilter === filter})}
        type="button"
        onClick={() => setSelectedFilters({
          firstLevel: filter,
          secondLevel: null})}
      >{filter}
      </button>
    </li>
  );
}

export default FilterFirstLevel;

