import { FC, ButtonHTMLAttributes } from "react";

import cn from "classnames";

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  color: string;
  bgColor: string;
  cb: () => void;
  isDisabled?: boolean;
};

const Button: FC<TypeButton> = (props) => {
  const { title, bgColor, cb, color, isDisabled, ...rest } = props;

  return (
    <button
      {...rest}
      className={cn(
        "rounded-2xl block w-2/3 p-3 text-lg font-medium mx-auto shadow-md transition-colors duration-300 ease-in-out",
        {
          "cursor-not-allowed": isDisabled,
        }
      )}
      style={{
        backgroundColor: isDisabled ? "rgb(229,231,235)" : bgColor,
        color,
      }}
      onClick={cb}
      disabled={isDisabled}
    >
      {title}
    </button>
  );
};

export default Button;
