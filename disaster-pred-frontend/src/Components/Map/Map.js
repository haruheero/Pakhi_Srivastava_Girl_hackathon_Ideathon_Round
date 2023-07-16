import * as React from 'react';
import { useState, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import Map, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from 'react-map-gl';

import ControlPanel from './control-panel';
import Pin from './pin';
import CITIES from './cities.json';

const TOKEN =
  ''; // Set your mapbox token here

export default function MApp({data}) {
  const [popupInfo, setPopupInfo] = useState(null);
  const lst = data.map(val => (val[1]))
  const pins = useMemo(
    () =>
      CITIES.map((city, index) => {
        if(lst.includes(city['city']))
        {
          return <Marker
            key={`marker-${index}`}
            longitude={city.longitude}
            latitude={city.latitude}
            anchor="bottom"
            onClick={e => {
              e.originalEvent.stopPropagation();
              setPopupInfo(city);
            }}
          >
            <Pin />
          </Marker>
        }
        else return <></>
        }),
    []
  );

  return (
    <>
      <Map
        initialViewState={{
          latitude: 11.2588,
          longitude: 75.7804,
          zoom: 8,
          bearing: 0,
          pitch: 0,
        }}
        style={{
          height: "100vh",
        }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxAccessToken={TOKEN}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        <ScaleControl />

        {pins}

        {popupInfo && (
          <Popup
            anchor="top"
            longitude={Number(popupInfo.longitude)}
            latitude={Number(popupInfo.latitude)}
            onClose={() => setPopupInfo(null)}
          >
            <div>
              Location:
              {popupInfo.city}
            </div>
            <div>
              Population density:
              {popupInfo.population_density}
            </div>
            <div>
              Elevation:
              {popupInfo.Elevation} m
            </div>
          </Popup>
        )}
      </Map>

      <ControlPanel />
    </>
  );
}

export function renderToDom(container) {
  createRoot(container).render(<MApp />);
}