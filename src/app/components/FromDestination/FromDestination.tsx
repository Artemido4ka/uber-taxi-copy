import { Coords } from "google-map-react";
import InputPlaces from "../ui/InputPlaces";

const FromDestination = () => {
  const cbSuccess = (address: string, location: Coords) => {
    console.log("success");
  };

  return <InputPlaces cbSuccess={cbSuccess} type="from" />;
};

export default FromDestination;
