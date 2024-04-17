import React, { memo } from "react";
import { Box, CustomButton } from "../../index.jsx";
import "./customList.css";
import { CONTAINS } from "../../../utils/constant.jsx";
const CustomList = ({
  items = [],
  onDeleteClick = () => {},
  onCheckClick = () => {},
}) => {
  return (
    <Box className="custom-list-container">
      <ul className="ul-wrapper">
        {items?.map((task, index) => (
          <li key={index} className="li-wrapper">
            <Box className="checkbox-wrapper">
              <input
                type={CONTAINS.CHECKBOX}
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
                title={CONTAINS.DELETE}
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

export default memo(CustomList);
