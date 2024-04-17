import React from "react";
import { Box, CustomButton } from "../../index.jsx";
import "./customList.css";
const CustomList = ({
  items = [],
  onDeleteClick = () => {},
  onCheckClick = () => {},
}) => {
  return (
    <Box className="custom-list-container bg-black max-h-dvh overscroll-y-auto ">
      <ul className="ul-wrapper">
        {items?.map((task, index) => (
          <li key={index} className="li-wrapper">
            <Box className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={task?.isCompleted}
                onChange={() => onCheckClick(task?.id)}
                className="w-5 h-5"
              />
            </Box>
            <Box className="text-wrapper">
              <h5 className="body-text">{task?.text}</h5>
            </Box>
            <Box className="button-wrapper">
              <CustomButton
                title="Delete"
                onClick={() => onDeleteClick(task?.id)}
                className="d-btn"
              />
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default CustomList;
