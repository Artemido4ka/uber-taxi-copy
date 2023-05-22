import Home from "@/app/components/home/Home";
import "../globals.css";
import { Provider } from "react-redux";

import { store } from "../app/store/store";

export default function HomePage() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
