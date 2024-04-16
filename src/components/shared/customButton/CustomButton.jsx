import React from "react";
const CustomButton = ({
  onClick = () => {},
  title = "",
  disabled = false,
  className = "",
  style = {},
  bg = "",
}) => {
  return (
    <button
      className={className ? className : `button ${disabled ? "disabled" : ""}`}
      style={{ ...style, backgroundColor: bg }}
      onClick={onClick}
      type="button"
    >
      {title}
    </button>
  );
};

export default CustomButton;
