import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { logoutAction } from '../../store/api-actions';
import classNames from 'classnames';
import Logo from '../logo/logo';
import UserInfo from '../user-info/user-info';

function Header() {
  const dispatch = useAppDispatch();

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuth = authorizationStatus === AuthorizationStatus.Auth;

  return (
    <header className={classNames('header',
      {'header--authorized' : isAuth})}
    >
      <div className="container">
        <div className="header__inner">
          <Logo />
          {isAuth && <UserInfo />}
          <div className="header__buttons">
            {isAuth ?
              <>
                <Link className="header__favourite" to={AppRoute.Favorites}>
                  <span className="header__favourite-icon">
                    <svg width="33" height="29" aria-hidden="true">
                      <use xlinkHref="#icon-favourite"></use>
                    </svg>
                  </span><span className="header__favourite-number">2</span><span className="visually-hidden">Избранное</span>
                </Link>
                <div className="header__buttons-authorized">
                  <div className="header__btn">
                    <Link
                      className="btn btn--second"
                      to={AppRoute.Main}
                      onClick={(evt) => {
                        evt.preventDefault();
                        dispatch(logoutAction());
                      }}
                    >Выйти
                    </Link>
                  </div>
                </div>
              </> :
              <>
                <div className="header__btn">
                  <Link className="btn btn--third header__link header__link--reg" to={AppRoute.SignUp}>Регистрация</Link>
                </div>
                <div className="header__btn">
                  <Link className="btn" to={AppRoute.LogIn}>Войти</Link>
                </div>
              </>}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
