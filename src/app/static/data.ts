import economyIcon from "../assets/options/economy.svg";

interface IList {
  _id: string;
  title: string;
  img: string;
  multiplier: number;
}

export const optionsList: IList[] = [
  {
    _id: "economy",
    title: "Economy",
    img: economyIcon.src,
    multiplier: 46,
  },
  {
    _id: "comfort",
    title: "Comfort",
    img: economyIcon.src,
    multiplier: 64,
  },
  {
    _id: "comfort-plus",
    title: "Comfort+",
    img: economyIcon.src,
    multiplier: 72,
  },
  {
    _id: "4",
    title: "4_a",
    img: economyIcon.src,
    multiplier: 117,
  },
  {
    _id: "5",
    title: "5_a",
    img: economyIcon.src,
    multiplier: 196,
  },
];
