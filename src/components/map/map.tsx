import { Icon, Marker, layerGroup } from 'leaflet';
import { useEffect } from 'react';
import './map.css';
import { URL_MARKER_SHOP, URL_MARKER_PRODUCTION, DEFAULT_LOCATION } from '../../const';
import useMap from '../../hooks/use-map';

const shopCustomIcon = new Icon({
  iconUrl: URL_MARKER_SHOP,
  iconSize: [26, 24],
  iconAnchor: [13, 24],
});

const productionCustomIcon = new Icon({
  iconUrl: URL_MARKER_PRODUCTION,
  iconSize: [26, 24],
  iconAnchor: [13, 24],
});

function Map(): JSX.Element {
  const shopLocation = DEFAULT_LOCATION;

  const {map, mapRef} = useMap({shopLocation});

  useEffect(() => {
    if (map) {
      if (shopLocation) {
        map.setView(
          {
            lat: 59.97069,
            lng: 30.316252,
          },
          200,
        );
      }
    }
  }, [map, shopLocation]);

  return (
    <div className="map__wrapper" ref={mapRef} ></div>
  );

}

export default Map;
