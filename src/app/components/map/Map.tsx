import GoogleMapReact from "google-map-react";

const Map = () => {
  return (
    <div className="h-screen w-full ">
      <GoogleMapReact
        bootstrapURLKeys={{ key: String(process.env.NEXT_PUBLIC_MAP_KEY) }}
        defaultCenter={{ lat: 50.123, lng: 8.685 }}
        defaultZoom={13}
        options={{ fullscreenControl: false, keyboardShortcuts: false }}
      />
    </div>
  );
};

export default Map;
