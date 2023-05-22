import FromDestination from "../FromDestination/FromDestination";
import Layout from "../layout/Layout";
import Map from "../Map/Map";
import ToDestination from "../ToDestination/ToDestination";

const Home = () => {
  return (
    <Layout title="Uber-copy">
      <Map />
      <div className="absolute z-10 left-5 w-11/12 bottom-40">
        <FromDestination />
        <ToDestination />
      </div>
    </Layout>
  );
};

export default Home;
