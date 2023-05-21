import Head from "next/head";
import { FC, useEffect, useState } from "react";

import FavIcon from "../../assets/images/favicon.svg";
import Script from "next/script";
import Loader from "../ui/Loader";

type TLayout = {
  title: string;
  children: React.ReactNode;
};

const Layout: FC<TLayout> = ({ children, title }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <Head>
        <title>{title} | Uber-taxi-copy</title>
        <meta name="" content="Uber app" />
        <link rel="icon" href={FavIcon.src} type="image/svg" />
      </Head>

      <Script
        strategy="beforeInteractive"
        src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_KEY}&libraries=places`}
      />

      <div
        style={{ maxWidth: 480 }}
        className="mx-auto relative overflow-hidden"
      >
        {isLoading ? <Loader /> : children}
      </div>
    </div>
  );
};

export default Layout;
