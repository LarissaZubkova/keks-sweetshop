import { Link, Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selector';
import { Helmet } from 'react-helmet-async';
import { useState, FormEvent } from 'react';
import { RegistrationData } from '../../types/auth-data';
import { validateEmail, validatePassword, validateName } from '../../utils/utils';
import { registrationAction } from '../../store/api-actions';

function SignupScreen() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    password: true,
  });

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as RegistrationData;

    setIsValid(
      {
        name: validateName(data.name),
        email: validateEmail(data.email),
        password: validatePassword(data.password),
      }
    );

    if (data !== null && isValid && isValid) {
      dispatch(registrationAction(data));
    }
  };

  return (
    <div className="wrapper">
      <Helmet>
        <title>Кондитерская Кекс - Регистрация</title>
      </Helmet>
      <main>
        <section className="register-page">
          <div className="register-page__header">
            <div className="register-page__img-wrap">
              <img className="register-page__img" src="img/svg/hero-keks.svg" width={727} height={569} alt="Картинка кота."/>
            </div>
          </div>
          <div className="register-page__content">
            <div className="register-page__inner">
              <h1 className="register-page__title">Регистрация</h1>
              <div className="register-page__form">
                <form
                  action="#"
                  method="post"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="register-page__fields">
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите ваше имя</span>
                        <input type="text" name="name" placeholder="Имя" required />
                      </label>
                    </div>
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите вашу почту</span>
                        <input type="email" name="email" placeholder="Почта" required />
                      </label>
                    </div>
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите ваш пароль</span>
                        <input type="password" name="password" placeholder="Пароль" required />
                      </label>
                    </div>
                    <div className="custom-input register-page__field">
                      <label><span className="custom-input__label">Введите ваше имя</span>
                        <input
                          type="file"
                          name="avatar"
                          data-text="Аватар"
                          accept="image/jpeg, image/png"
                        />
                      </label>
                    </div>
                  </div>
                  <button className="btn register-page__btn btn--large" type="submit">Зарегистрироваться</button>
                </form>
              </div>
              <p className="register-page__text-wrap">Уже зарегистрированы?
                <Link className="register-page__link" to={AppRoute.LogIn}>Войдите</Link> в свой аккаунт.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignupScreen;
