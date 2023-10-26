function ErrorScreen(): JSX.Element {
  return (
    <main>
      <h1 className="visually-hidden">Ошибка загрузки страницы</h1>
      <section className="error-loading">
        <div className="container">
          <h2 className="error-loading__title">Что-то пошло не&nbsp;так...</h2>
          <p className="error-loading__help">Попробуйте перезагрузить страницу или обратитесь к&nbsp;администратору сайта.</p>
          <div className="error-loading__image">
            <img src="img/svg/cake-load.svg" width={157} height={184} alt="Кекс." />
          </div>
        </div>
      </section>
    </main>
  );
}

export default ErrorScreen;
