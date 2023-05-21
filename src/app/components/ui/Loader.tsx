import Image from "next/image";
import preloaderImage from "../../assets/images/favicon.svg";

const Loader = () => {
  return (
    <div className="w-screen h-screen">
      <Image
        src={preloaderImage.src}
        alt="preloader"
        layout="fill"
        priority={true}
      />
    </div>
  );
};

export default Loader;
