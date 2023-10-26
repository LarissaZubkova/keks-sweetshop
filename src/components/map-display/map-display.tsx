import { Shops } from '../../const';
import MapAddressCard from '../map-address-card/map-address-card';
import Map from '../map/map';

function MapDisplay() {
  return (
    <section className="map">
      <div className="container">
        <h2 className="map__title">адреса</h2>

        <Map />

        <ul className="map__addresses">
          <MapAddressCard>
            <input type="radio" value="user-agreement-10" id="user-agreement-id-10" name="user-agreement" />
            <label className="custom-toggle__label" htmlFor="user-agreement-id-10">{Shops.FIRST_SHOP.name}</label>
          </MapAddressCard>
          <MapAddressCard>
            <input type="radio" value="user-agreement-12" id="user-agreement-id-12" name="user-agreement" checked />
            <label className="custom-toggle__label" htmlFor="user-agreement-id-12">{Shops.SECOND_SHOP.name}</label>
          </MapAddressCard>
          <MapAddressCard>
            <input type="radio" value="user-agreement-13" id="user-agreement-id-13" name="user-agreement" />
            <label className="custom-toggle__label" htmlFor="user-agreement-id-13">{Shops.PRODUCTION.name}</label>
          </MapAddressCard>
        </ul>
      </div>
    </section>
  );
}

export default MapDisplay;
