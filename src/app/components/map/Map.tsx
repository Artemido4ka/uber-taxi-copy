import { useActions } from "@/app/hooks/useActions";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { optionsList } from "@/app/static/data";
import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";

interface IMAP {
  map: google.maps.Map;
  maps: any;
}

const Map = () => {
  const { from, to } = useTypedSelector((state) => state.uber);
  const { setTravelTime, setSelectedOption } = useActions();

  const [MAP, setMAP] = useState<IMAP>({} as IMAP);
  const [isExistRoute, setIExistRoute] = useState(false);

  useEffect(() => {
    if (
      from.location?.lat &&
      to.location?.lat &&
      MAP?.map &&
      MAP?.maps &&
      !isExistRoute
    )
      renderRoute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [MAP?.map, MAP?.maps, from, to, isExistRoute]);

  const renderRoute = () => {
    const { map, maps } = MAP;

    if (typeof maps.DirectionsRenderer === "function") {
      const directionsRenderer: google.maps.DirectionsRenderer =
        new maps.DirectionsRenderer();
      const directionsService: google.maps.DirectionsService =
        new maps.DirectionsService();

      directionsService
        .route({
          origin: from.location,
          destination: to.location,
          travelMode: google.maps.TravelMode.DRIVING,
        })
        .then((res) => {
          directionsRenderer.setDirections(res);

          const durationSec = res.routes[0].legs[0].duration?.value;

          if (durationSec) {
            setTravelTime(Math.ceil(durationSec / 60));
            setSelectedOption(optionsList[0]._id);
          }
        })
        .catch((err) => alert(err));

        directionsRenderer.setOptions({
          markerOptions: {
            clickable: false
          }
        })

        directionsRenderer.setMap(map)
    }
  };

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
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={setMAP}
      />
    </div>
  );
};

export default Map;
