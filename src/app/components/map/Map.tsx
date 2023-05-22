import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import GoogleMapReact from "google-map-react";

const Map = () => {
  const { from } = useTypedSelector((state) => state.uber);

  return (
    <div className="h-screen w-full ">
      <GoogleMapReact
        bootstrapURLKeys={{ key: String(process.env.NEXT_PUBLIC_MAP_KEY) }}
        defaultCenter={{ lat: 50.123, lng: 8.685 }}
        defaultZoom={13}
        options={{ fullscreenControl: false, keyboardShortcuts: false }}
        center={
          from.location?.lat
            ? {
                lat: from.location?.lat,
                lng: from.location?.lng,
              }
            : undefined
        }
      />
    </div>
  );
};

export default Map;
