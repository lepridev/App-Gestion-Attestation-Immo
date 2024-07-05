import clsx from "clsx";
import React from "react";

interface Props {
  btnTitle?: string;
  btnColor?: "blue" | "red" | "green";
  btnSize?: "small" | "medium" | "large";
  action?: Function;
  type?: "button" | "submit";
}

const Button = ({
  btnTitle,
  btnColor = "blue",
  btnSize = "small",
  action = () => {},
  type = "button",
}: Props) => {
  let variantColor: string = "",
    varianteSize: string = "";

  switch (btnColor) {
    case "blue":
      variantColor = "bg-blue-700";
      break;
    case "red":
      variantColor = "bg-red-700";
      break;
    case "green":
      variantColor = "bg-green-700";
      break;
  }

  switch (btnSize) {
    case "small":
      varianteSize = "px-3 py-2";
      break;
    case "medium":
      varianteSize = "px-6 py-3";
      break;
    case "large":
      varianteSize = "px-10 py-4";
      break;
  }

  const handleClick = () => {
    if (action) {
      action();
    }
  };

  return (
    <button
      type={type}
      // onClick={handleClick}
      className={clsx(
        `inline-flex items-center ${varianteSize} text-sm font-medium text-center text-white 
        ${variantColor} rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`
      )}
    >
      {btnTitle}{" "}
    </button>
  );
};

export default Button;
