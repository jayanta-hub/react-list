import React from "react";
import { twMerge } from "tailwind-merge";
const CustomButton = ({
  onClick = () => {},
  title = "",
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={twMerge("btn", className)}
      onClick={onClick}
      type="button"
    >
      {title}
    </button>
  );
};

export default CustomButton;
