type MapAddressCardProps = {
    children: React.ReactNode;
}

function MapAddressCard({children}: MapAddressCardProps): JSX.Element {
  return (
    <li className="map__address">
      <div className="custom-toggle custom-toggle--radio custom-toggle--address">
        {children}
        <address className="custom-toggle__address">Морской пр. 2А
          <svg className="custom-toggle__icon" width={26} height={24}aria-hidden="true">
            <use xlinkHref="#icon-keks-footprint"></use>
          </svg>
        </address>
      </div>
    </li>
  );
}

export default MapAddressCard;
