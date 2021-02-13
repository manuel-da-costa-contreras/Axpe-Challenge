interface Location {
  lat: number;
  lng: number;
}

interface Mark {
  location: Location;
  label?: string;
}

export interface GoogleMapsProps {
  zoom: number;
  initialLocation: Location;
  arrayMarks?: Mark[];
}
