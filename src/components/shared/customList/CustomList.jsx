import React, { memo } from "react";
import { Box, CustomButton } from "../../index.jsx";
import { MdDeleteForever } from "react-icons/md";
const CustomList = ({
  currentItems = [],
  onDeleteClick = () => {},
  onCheckClick = () => {},
}) => {
  return (
    <Box className="custom-list-container">
      <ul className="ul-wrapper">
        {currentItems?.map((task, index) => (
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
                className="rounded-md bg-red-500 py-1 px-1 text-white font-sans"
                // icon={<MdDeleteForever size={20} />}
              />
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default memo(CustomList);
