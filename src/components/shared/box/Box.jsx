import React from "react";

const Box = ({ children, className, ...props }) => {
  return (
    <div {...props} className={className}>
      {children}
    </div>
  );
};

export default Box;
