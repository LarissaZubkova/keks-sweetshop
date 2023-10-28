import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchAddFavoriteAction, fetchDeleteFavoriteAction } from '../../store/api-actions';
import { getFavorites } from '../../store/favorites-process/favorite-process.selector';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useNavigate } from 'react-router-dom';

type FavoriteButtonProps = {
  id: string;
  isSmall?: boolean;
}

function FavoriteButton({id, isSmall}: FavoriteButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const favorites = useAppSelector(getFavorites);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isFavorite = favorites.some((favorite) => favorite.id === id);

  return (
    <button
      className={classNames(isSmall ? 'item-details__like-button' : 'card-item__favorites', {
        'card-item__favorites--active' : isFavorite && !isSmall,
        'item-details__like-button--active' : isFavorite && isSmall,
      })}
      onClick={() => {
        if (authorizationStatus !== AuthorizationStatus.Auth) {
          navigate(AppRoute.LogIn);
          return;
        }
        if (isFavorite) {
          dispatch(fetchDeleteFavoriteAction(id));
        } else {
          dispatch(fetchAddFavoriteAction(id));
        }
      }}
    >
      <span className="visually-hidden">Добавить в избранное</span>
      <svg width={isSmall ? 45 : 51} height={isSmall ? 37 : 41} aria-hidden="true">
        <use xlinkHref="#icon-like"></use>
      </svg>
    </button>
  );
}

export default FavoriteButton;
