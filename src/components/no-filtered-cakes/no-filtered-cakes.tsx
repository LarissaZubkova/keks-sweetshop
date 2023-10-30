function NoFilteredCakes(): JSX.Element {
  return (
    <section className="not-found">
      <h2 className="visually-hidden">Каталог выбранные товары</h2>
      <div className="container">
        <div className="not-found__content-wrapper">
          <div className="not-found__wrapper">
            <svg width="684" height="423" aria-hidden="true">
              <use xlinkHref="#not-found-cloud"></use>
            </svg>
            <div className="not-found__content">
              <p className="not-found__text">Все выбранные кексы съели.</p>
              <p className="not-found__text">Мы уже печём новые.</p>
            </div>
          </div>
          <div className="not-found__img-wrapper">
            <img src="img/svg/not-found-keks.svg" width={719} height={607} alt="Картика кота."/>

          </div>
        </div>
      </div>
    </section>
  );
}

export default NoFilteredCakes;
