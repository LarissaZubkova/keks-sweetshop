import { FilterSortType } from '../../const';

type FilterSortCardProps = {
    type: FilterSortType;
    index: number;
}

function FilterSortCard({type, index}: FilterSortCardProps) {
  return (
    <li className="filter-sort__filter-item">
      <div className="custom-toggle custom-toggle--sorting">
        <input type="radio" id={`review-sort-${index}`} name="review-sort" checked />
        <label className="custom-toggle__label" htmlFor={`review-sort-${index}`}>{type}</label>
      </div>
    </li>
  );
}

export default FilterSortCard;
