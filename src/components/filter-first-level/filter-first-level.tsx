import { FirstLevelFilter } from '../../const';

type FilterFirstLevelProps = {
    filter: FirstLevelFilter;
}

function FilterFirstLevel({filter}: FilterFirstLevelProps) {
  return (
    <li className="catalog-filter__item catalog-filter__item--first-level">
      <button className="btn btn--filter-first-level" type="button">{filter}</button>
    </li>
  );
}

export default FilterFirstLevel;
