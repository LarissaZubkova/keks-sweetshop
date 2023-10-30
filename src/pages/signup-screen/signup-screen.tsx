import classNames from 'classnames';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { registrationAction } from '../../store/api-actions';
import { getAuthorizationStatus, getHasErrorStatus, getIsAlreadyExistStatus } from '../../store/user-process/user-process.selector';
import { RegistrationData } from '../../types/auth-data';
import { validateAvatar, validateEmail, validateName, validatePassword } from '../../utils/utils';

function SignupScreen(): JSX.Element {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const hasAlreadyExist = useAppSelector(getIsAlreadyExistStatus);
  const hasError = useAppSelector(getHasErrorStatus);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    avatar: null,
  });

  const [isValid, setIsValid] = useState({
    name: true,
    email: true,
    password: true,
    avatar: true,
  });

  useEffect(() => {
    setIsValid({
      name: validateName(formState.name),
      email: validateEmail(formState.email),
      password: validatePassword(formState.password),
      avatar: true,
    });
  }, [formState]);

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target;

    setFormState({...formState, [name]: value});
  };

  const [isError, setIsError] = useState({
    exist: false,
    error: false,
  });

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return <Navigate to={AppRoute.Main} />;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as RegistrationData;
    const currentData = {...formState, avatar: data.avatar};

    setIsValid({
      name: validateName(formState.name),
      email: validateEmail(formState.email),
      password: validatePassword(formState.password),
      avatar: validateAvatar(data.avatar),
    });

    const formIsValid = isValid.avatar && isValid.email && isValid.name && isValid.password;

    if (formState && formIsValid) {
      dispatch(registrationAction(currentData));
      setIsError({
        exist: hasAlreadyExist,
        error: hasError,
      });
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
              {isError.exist && <p>Такой адрес уже существует</p>}
              {isError.error && <p>Что-то пошло не так, попробуйте еще раз</p>}
              <div className="register-page__form">
                <form
                  action="#"
                  method="post"
                  autoComplete="off"
                  onSubmit={handleSubmit}
                >
                  <div className="register-page__fields">
                    <div className={classNames('custom-input register-page__field',
                      {'is-valid' : isValid.name},
                      {'is-invalid' : !isValid.name}
                    )}
                    >
                      <label><span className="custom-input__label">Введите ваше имя</span>
                        <input
                          type="text"
                          name="name"
                          placeholder="Имя"
                          onChange={handleFieldChange}
                        />
                      </label>
                      {!isValid.name && <span className="custom-input__message">заполните поле</span>}
                    </div>
                    <div className={classNames('custom-input register-page__field',
                      {'is-valid' : isValid.email},
                      {'is-invalid' : !isValid.email}
                    )}
                    >
                      <label><span className="custom-input__label">Введите вашу почту</span>
                        <input
                          type="email"
                          name="email"
                          placeholder="Почта"
                          required
                          onChange={handleFieldChange}
                        />
                      </label>
                    </div>
                    <div className={classNames('custom-input register-page__field',
                      {'is-valid' : isValid.password},
                      {'is-invalid' : !isValid.password}
                    )}
                    >
                      <label><span className="custom-input__label">Введите ваш пароль</span>
                        <input
                          type="password"
                          name="password"
                          placeholder="Пароль"
                          required
                          onChange={handleFieldChange}
                        />
                      </label>
                    </div>
                    <div className={classNames('custom-input register-page__field',
                      {'file-selected': formState.avatar}
                    )}
                    >
                      <label><span className="custom-input__label">Введите ваше имя</span>
                        <input
                          type="file"
                          name="avatar"
                          data-text='Аватар'
                          accept="image/jpeg, image/png"
                          onChange={handleFieldChange}
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
