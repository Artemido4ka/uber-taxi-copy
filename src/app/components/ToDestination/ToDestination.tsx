import { Coords } from "google-map-react";
import InputPlaces from "../ui/InputPlaces";
import { useActions } from "@/app/hooks/useActions";

const ToDestination = () => {
  const { setTo } = useActions();

  const cbSuccess = (address: string, location: Coords) => {
    setTo({ location, description: address });
  };

  return <InputPlaces cbSuccess={cbSuccess} type="to" />;
};

export default ToDestination;
