import { Coords } from "google-map-react";
import InputPlaces from "../ui/InputPlaces";
import { useActions } from "@/app/hooks/useActions";

const FromDestination = () => {
  const { setFrom, setTo } = useActions();

  const cbSuccess = (address: string, location: Coords) => {
    setFrom({ location, description: address });
    setTo("");
  };

  return <InputPlaces cbSuccess={cbSuccess} type="from" />;
};

export default FromDestination;
