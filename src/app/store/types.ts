import { Coords } from "google-map-react";

export type TypeInputForm = {
  location: Coords;
  description: string;
};

export type TypeInitialState = {
  from: TypeInputForm;
  to: TypeInputForm;
  travelTime: number;
  selectedOption: string;
};
