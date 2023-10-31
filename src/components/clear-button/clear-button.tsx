import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchDeleteFavoriteAction } from '../../store/api-actions';
import { getDeletingStatus} from '../../store/favorite-process/favorite-process.selector';
import { CakeFullCard } from '../../types/product';

type ClearButtonProps = {
  favorites: CakeFullCard[];
}

function ClearButton({favorites}: ClearButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const isDeleting = useAppSelector(getDeletingStatus);
  const favoritesId = favorites.map((favorite) => favorite.id);

  return (
    <div className="container">
      <h2 className="visually-hidden">Избранные товары</h2>
      <div className="favourites__button">
        <button
          className="btn btn--second"
          type="button"
          disabled={isDeleting}
          onClick={() => favoritesId.map((id) => dispatch(fetchDeleteFavoriteAction(id)))}
        >Очистить
        </button>
      </div>
    </div>
  );
}

export default ClearButton;
