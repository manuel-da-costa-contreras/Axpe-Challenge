import GoogleMap from '../../components/googleMaps/googleMap';
import Layout from '../../components/Layout/layout';

// Move to a mock folder
const initialLocation = { lat: 41.49675, lng: 1.898728 };

export default function MainComponent() {
  return (
    <Layout>
      <GoogleMap zoom={15} initialLocation={initialLocation} />
    </Layout>
  );
}
