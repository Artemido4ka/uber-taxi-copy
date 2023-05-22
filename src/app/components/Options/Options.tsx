import { useActions } from "@/app/hooks/useActions";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { optionsList } from "@/app/static/data";
import cn from "classnames";
import Image from "next/image";
import { useRef } from "react";

export const Options = () => {
  const { selectedOption, travelTime } = useTypedSelector(
    (state) => state.uber
  );
  const { setSelectedOption } = useActions();
  const listRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (optionId: string) => {
    if (listRef.current) {
      const clickedElement = Array.from(listRef.current.children).find(
        (el) => el.id === optionId
      );
      clickedElement?.scrollIntoView({ behavior: "smooth", inline: "center" });
    }

    travelTime && setSelectedOption(optionId);
    return null;
  };

  return (
    <div
      className={cn("flex overflow-x-scroll my-5 pb-2", {
        " pointer-events-none": !travelTime && !selectedOption,
      })}
    >
      <div className="flex flex-nowrap" ref={listRef}>
        {optionsList.map((option) => (
          <button
            id={option._id}
            key={option._id}
            className="inline-block rounded-xl py-2 px-4 outline-none mr-4 bg-white overflow-hidden"
            onClick={(e) => handleClick(option._id)}
            style={{ minWidth: 105 }}
          >
            <div
              className={cn(
                "text-left transition-opacity duration-300 ease-in-out",
                {
                  "opacity-100": option._id === selectedOption,
                  "opacity-30": option._id !== selectedOption,
                }
              )}
            >
              <Image
                src={option.img}
                alt={option.title}
                width={50}
                height={50}
              />
              <div className="text-sm -mt-1">{option.title}</div>
              <div className="text-md font-medium">USD</div>

              {travelTime
                ? new Intl.NumberFormat("EN-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(travelTime * option.multiplier)
                : "$"}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Options;
