import Layout from '../../components/Layout/layout';
import GoogleMap from '../../components/googleMaps/googleMaps';

// Move to a mock folder
const initialLocation = { lat: 41.49675, lng: 1.898728 };

export default function MainComponent() {
  return (
    <Layout>
      <div className="small-container">
        <GoogleMap zoom={15} initialLocation={initialLocation} />
      </div>
    </Layout>
  );
}
