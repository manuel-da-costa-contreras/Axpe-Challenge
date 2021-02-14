import { useEffect, useRef } from 'react';

import { onGlobal } from '../lib/on-global';

import { GoogleMapsProps } from './googleMapsProps';

const GoogleMap = (props: GoogleMapsProps) => {
  const googleMapRef = useRef();
  //TODO: Move api and google url to api folder
  const GOOGLE_MAP_API_KEY = 'AIzaSyB3EkGRUsuzb8JflnVg_v8wy2bamHZGGkI';
  const GoogleUrl = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
  const { zoom, initialLocation, arrayMarks } = props;

  const createMark = (googleMap: google.maps.Map<Element>) => {
    arrayMarks.map(
      (mark) =>
        new google.maps.Marker({
          position: mark.location,
          map: googleMap,
          label: mark.label,
        })
    );
  };

  const createGoogleMaps = () => {
    onGlobal('google')
      .then(() => {
        const mapgoogle = new google.maps.Map(googleMapRef.current, {
          zoom,
          center: initialLocation,
        });

        // Markers
        if (arrayMarks) {
          createMark(mapgoogle);
        }
      })
      .catch((err) => {
        console.log(`onGlobal error: ${err}`);
      });
  };

  const createScriptGoogleMap = () => {
    const googleMapScript = document.createElement('script');

    googleMapScript.id = 'google-maps-script';
    googleMapScript.src = GoogleUrl;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      createGoogleMaps();
    });
  };

  useEffect(() => {
    const existScript = document.getElementById('google-maps-script');

    if (existScript === null) {
      createScriptGoogleMap();
    } else {
      createGoogleMaps();
    }
  }, []);

  return (
    <div
      id="google-map"
      key="react-map"
      className="google-map-wrapper"
      ref={googleMapRef}
    />
  );
};

export default GoogleMap;
