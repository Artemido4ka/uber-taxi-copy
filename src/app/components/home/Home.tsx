import FromDestination from "../FromDestination/FromDestination";
import Layout from "../layout/Layout";
import Map from "../map/Map";
import Options from "../Options/Options";
import OrderButton from "../OrderButton/OrderButton";
import ToDestination from "../ToDestination/ToDestination";

const Home = () => {
  return (
    <Layout title="Uber-copy">
      <Map />
      <div className="absolute z-10 left-5 w-11/12 bottom-10">
        <FromDestination />
        <ToDestination />
        <Options />
        <OrderButton />
      </div>
    </Layout>
  );
};

export default Home;
