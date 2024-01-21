'use client';
import { GoogleMap, useLoadScript, Marker, Libraries } from '@react-google-maps/api';

const Maps = () => {
  const libraries: Libraries = ['places']; // Define required libraries

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GMAPS_API as string, // Access API key from environment variable
    libraries,
  });

  const center = {
    lat: -0.78159215984936, // Default latitude
    lng: 119.86011538987988, // Default longitude
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={{ width: '70vw', height: '30vw' }}
        zoom={15}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Maps;
