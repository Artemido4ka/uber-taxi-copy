import Image from "next/image";
import preloaderImage from "../../assets/images/taxi.png";

const Loader = () => {
  return (
    <div className="w-screen h-screen">
      <Image
        src={preloaderImage.src}
        alt="preloader"
        priority={true}
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default Loader;
