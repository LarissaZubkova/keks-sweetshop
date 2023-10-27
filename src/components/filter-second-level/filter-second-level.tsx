import { SecondLevelFilter } from '../../const';

type FilterSecondLevelProps = {
    filter: SecondLevelFilter;
    index: number;
}

function FilterSecondLevel({filter, index}: FilterSecondLevelProps): JSX.Element {
  return (
    <li className="catalog-filter__item catalog-filter__item--second-level">
      <div className="custom-toggle custom-toggle--checkbox">
        <input type="checkbox" value="chocolate" id={`catalog-second-level-id-${index}`} name="catalog-second-level" />
        <label className="custom-toggle__label" htmlFor={`catalog-second-level-id-${index}`}>{filter}</label>
      </div>
    </li>
  );
}

export default FilterSecondLevel;
