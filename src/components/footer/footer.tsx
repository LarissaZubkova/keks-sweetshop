function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p className="footer__feedback">Напишите нам:
            <a className="footer__feedback-email" href="mailto:pecarnya@academy.pro">pecarnya@academy.pro</a>
          </p>
          <ul className="footer__list">
            <li className="footer__item">
              <a className="footer__social-link" href="#" target="_blank" rel="nofollow noopener"><span className="visually-hidden">Вконтакте</span>
                <svg width={50} height={50} aria-hidden="true">
                  <use xlinkHref="#icon-vk"></use>
                </svg>
              </a>
            </li>
            <li className="footer__item">
              <a className="footer__social-link" href="#" target="_blank" rel="nofollow noopener"><span className="visually-hidden">Телеграм</span>
                <svg width={50} height={50} aria-hidden="true">
                  <use xlinkHref="#icon-telegram"></use>
                </svg>
              </a>
            </li>
          </ul><a className="footer__devolopers" href="https://htmlacademy.ru/">Разработано .html Academy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
