import { SecondLevelFilter } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSecondLevelFilter } from '../../store/filters-process/filters-process.selector';
import { setSecondLevelFilter } from '../../store/filters-process/filters-process.slice';

type FilterSecondLevelProps = {
    filter: SecondLevelFilter;
    index: number;
}

function FilterSecondLevel({filter, index}: FilterSecondLevelProps): JSX.Element {
  const dispatch = useAppDispatch();
  const selectedFilter = useAppSelector(getSecondLevelFilter);

  return (
    <li className="catalog-filter__item catalog-filter__item--second-level">
      <div className="custom-toggle custom-toggle--checkbox">
        <input
          type="checkbox"
          value="chocolate"
          id={`catalog-second-level-id-${index}`}
          name="catalog-second-level"
          checked={selectedFilter.some((type) => type === filter)}
          onChange={() => dispatch(setSecondLevelFilter(filter))}
        />
        <label className="custom-toggle__label" htmlFor={`catalog-second-level-id-${index}`}>{filter}</label>
      </div>
    </li>
  );
}

export default FilterSecondLevel;
