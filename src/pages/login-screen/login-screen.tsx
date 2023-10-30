import classNames from 'classnames';
import { FormEvent, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { AuthData } from '../../types/auth-data';
import { validateEmail, validatePassword } from '../../utils/utils';

function LoginScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as AuthData;
    setIsPasswordValid(validatePassword(data.password));
    setIsEmailValid(validateEmail(data.email));

    if (data !== null && isPasswordValid && isEmailValid) {
      console.log(isPasswordValid, isEmailValid);
      dispatch(loginAction(data));
    }
  };

  return (
    <div className="wrapper">
      <Helmet>
        <title>Кондитерская Кекс - Вход</title>
      </Helmet>
      <main>
        <section className="login-page">
          <div className="login-page__header">
            <div className="login-page__img-wrap">
              <img className="login-page__img" src="img/svg/hero-keks.svg" width={727} height={569} alt="Картика кота." />
            </div>
          </div>
          <div className="login-page__content">
            <div className="login-page__inner">
              <h1 className="login-page__title">Вход</h1>
              <div className="login-page__form">
                <form
                  action="#"
                  method="post"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="login-page__fields">
                    <div className={classNames('custom-input login-page__field',
                      {'is-valid' : isEmailValid},
                      {'is-invalid' : !isEmailValid}
                    )}
                    >
                      <label><span className="custom-input__label">Введите вашу почту</span>
                        <input type="email" name="email" placeholder="Почта" />
                      </label>
                      {!isEmailValid && <span className="custom-input__label">Введите вашу почту</span>}
                    </div>
                    <div className="custom-input login-page__field">
                      <label><span className="custom-input__label">Введите ваш пароль</span>
                        <input type="password" name="password" placeholder="Пароль" />
                      </label>
                    </div>
                  </div>
                  <button
                    className="btn login-page__btn btn--large"
                    type="submit"
                  >Войти
                  </button>
                </form>
              </div>
              <p className="login-page__text-wrap">Ещё не зарегистрированы?
                <Link className="login-page__link" to={AppRoute.SignUp}>Создайте
                </Link> аккаунт прямо сейчас.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LoginScreen;
