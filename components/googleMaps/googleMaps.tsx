import {
  GoogleMap,
  Marker,
  StandaloneSearchBox,
  useLoadScript,
} from '@react-google-maps/api';
import { useCallback, useRef, useState } from 'react';

const GoogleMaps = () => {
  const mapRef = useRef();
  const [markers, setMarkers] = useState([]);

  // Move to a mock folder
  const initialLocation = { lat: 41.49675, lng: 1.898728 };
  const libraries = ['places'];

  //API
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.googleMapKey,
    libraries,
  });

  // use google-map-wrapper
  const mapContainerStyle = {
    width: '100%',
    height: '100%',
  };

  const options = {
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
  };

  const onMapClick = useCallback((event) => {
    setMarkers((current) => [
      ...current,
      {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
        time: new Date(),
      },
    ]);
  }, []);

  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  // Early Return
  if (loadError) {
    return null;
  }

  if (!isLoaded) {
    return 'loading maps';
  }

  return (
    <div className="small-container">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={initialLocation}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {/* Added markers on click */}
        {markers.map((marker) => (
          <Marker
            key={marker.time.toISOString()}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        ))}
        {/* standalone input text */}
        <StandaloneSearchBox>
          <input
            type="text"
            placeholder="custom placeholder"
            className="search"
          />
        </StandaloneSearchBox>
      </GoogleMap>
    </div>
  );
};

export default GoogleMaps;
