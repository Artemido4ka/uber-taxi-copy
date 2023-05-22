import economyIcon from "../assets/options/economy.svg";
import comfortIcon from "../assets/options/comfort.svg";
import comfortPlusIcon from "../assets/options/comfortPlus.svg";
import businessIcon from "../assets/options/business.svg";
import premiumIcon from "../assets/options/premium.svg";

interface IList {
  _id: string;
  title: string;
  img: string;
  multiplier: number;
}

export const optionsList: IList[] = [
  {
    _id: "economy_1",
    title: "Economy",
    img: economyIcon.src,
    multiplier: 0.2,
  },
  {
    _id: "comfort_2",
    title: "Comfort",
    img: comfortIcon.src,
    multiplier: 0.3,
  },
  {
    _id: "comfort-plus_3",
    title: "Comfort+",
    img: comfortPlusIcon.src,
    multiplier: 0.35,
  },
  {
    _id: "business_4",
    title: "Business",
    img: businessIcon.src,
    multiplier: 0.5,
  },
  {
    _id: "Premium_5",
    title: "Premium",
    img: premiumIcon.src,
    multiplier: 0.9,
  },
];
