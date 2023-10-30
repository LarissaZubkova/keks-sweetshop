import { Icon, Marker, layerGroup } from 'leaflet';
import { useEffect } from 'react';
import { Shops, URL_MARKER_PRODUCTION, URL_MARKER_SHOP } from '../../const';
import useMap from '../../hooks/use-map';
import { Shop } from '../../types/data';
import 'leaflet/dist/leaflet.css';
import './map.css';

const shopCustomIcon = new Icon({
  iconUrl: URL_MARKER_SHOP,
  iconSize: [26, 24],
  iconAnchor: [26, 24],
});

const productionCustomIcon = new Icon({
  iconUrl: URL_MARKER_PRODUCTION,
  iconSize: [26, 24],
  iconAnchor: [26, 24],
});

type MapProps = {
  selectedAddress: Shop;
}

function Map({selectedAddress}: MapProps): JSX.Element {
  const {address, name} = selectedAddress;
  const {map, mapRef} = useMap({address});

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      const marker = new Marker({
        lat: address[0],
        lng: address[1],
      });

      marker
        .setIcon(name === Shops.PRODUCTION.name ?
          productionCustomIcon :
          shopCustomIcon)
        .addTo(markerLayer);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, address, name]);

  return (
    <div className="map__wrapper" ref={mapRef}></div>
  );

}

export default Map;
