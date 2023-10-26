import { useState } from 'react';
import { Shops } from '../../const';
import MapAddressCard from '../map-address-card/map-address-card';
import Map from '../map/map';

function MapDisplay() {
  const {FIRST_SHOP, SECOND_SHOP, PRODUCTION} = Shops;
  const [selectedAddress, setSelectedAddress] = useState(FIRST_SHOP);

  return (
    <section className="map">
      <div className="container">
        <h2 className="map__title">адреса</h2>
        <Map selectedAddress={selectedAddress} />
        <ul className="map__addresses">
          <MapAddressCard>
            <input type="radio"
              value="user-agreement-10"
              id="user-agreement-id-10"
              name="user-agreement"
              onChange={() => setSelectedAddress(FIRST_SHOP)}
              checked={selectedAddress.name === FIRST_SHOP.name}
            />
            <label className="custom-toggle__label" htmlFor="user-agreement-id-10">{FIRST_SHOP.name}</label>
          </MapAddressCard>
          <MapAddressCard>
            <input
              type="radio"
              value="user-agreement-12"
              id="user-agreement-id-12"
              name="user-agreement"
              onChange={() => setSelectedAddress(SECOND_SHOP)}
              checked={selectedAddress.name === SECOND_SHOP.name}
            />
            <label className="custom-toggle__label" htmlFor="user-agreement-id-12">{SECOND_SHOP.name}</label>
          </MapAddressCard>
          <MapAddressCard>
            <input
              type="radio"
              value="user-agreement-13"
              id="user-agreement-id-13"
              name="user-agreement"
              onChange={() => setSelectedAddress(PRODUCTION)}
              checked={selectedAddress.name === PRODUCTION.name}
            />
            <label className="custom-toggle__label" htmlFor="user-agreement-id-13">{PRODUCTION.name}</label>
          </MapAddressCard>
        </ul>
      </div>
    </section>
  );
}

export default MapDisplay;
