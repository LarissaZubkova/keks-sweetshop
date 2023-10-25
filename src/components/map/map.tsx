function Map() {
  return (
    <section className="map">
      <div className="container">
        <h2 className="map__title">адреса</h2>
        <div className="map__wrapper"></div>
        <ul className="map__addresses">
          <li className="map__address">
            <div className="custom-toggle custom-toggle--radio custom-toggle--address">
              <input type="radio" value="user-agreement-10" id="user-agreement-id-10" name="user-agreement" />
              <label className="custom-toggle__label" htmlFor="user-agreement-id-10">Кондитерская 1</label>
              <address className="custom-toggle__address">Морской пр. 2А
                <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                  <use xlinkHref="#icon-keks-footprint"></use>
                </svg>
              </address>
            </div>
          </li>
          <li className="map__address">
            <div className="custom-toggle custom-toggle--radio custom-toggle--address">
              <input type="radio" value="user-agreement-12" id="user-agreement-id-12" name="user-agreement" checked />
              <label className="custom-toggle__label" htmlFor="user-agreement-id-12">Кондитерская 2</label>
              <address className="custom-toggle__address">Морской пр. 2А
                <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                  <use xlinkHref="#icon-keks-footprint"></use>
                </svg>
              </address>
            </div>
          </li>
          <li className="map__address">
            <div className="custom-toggle custom-toggle--radio custom-toggle--address" >
              <input type="radio" value="user-agreement-13" id="user-agreement-id-13" name="user-agreement" />
              <label className="custom-toggle__label" htmlFor="user-agreement-id-13">Производство</label>
              <address className="custom-toggle__address">Морской пр. 2А
                <svg className="custom-toggle__icon" width="26" height="24" aria-hidden="true">
                  <use xlinkHref="#icon-keks-footprint"></use>
                </svg>
              </address>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Map;
