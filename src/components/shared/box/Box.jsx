import React from "react";

const Box = ({ children, className, style, bg }) => {
  return (
    <div className={className} style={{ ...style, bg }}>
      {children}
    </div>
  );
};

export default Box;
