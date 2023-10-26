import { useEffect, useState, useRef } from 'react';
import { Map, TileLayer } from 'leaflet';

type MapProps = {
    shopLocation: number[];
}

function useMap({shopLocation}: MapProps) {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: shopLocation[0],
          lng: shopLocation[1],
        },
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      );
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, shopLocation]);

  return {
    map, mapRef
  };
}

export default useMap;
