import React, { memo } from "react";
import "./customList.css";
import { Box, CustomButton } from "../../index.jsx";
const CustomList = ({
  currentItems = [],
  onClick = () => {},
  toggleCompleted = () => {},
}) => {
  console.log("CustomList", currentItems);
  return (
    <Box className="flex customList">
      <ul>
        {currentItems?.map((task, index) => (
          <li key={index}>
            <Box
              style={{
                width: "90%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                className="flex"
                style={{
                  flexWrap: "wrap",
                  padding: "5px",
                }}
              >
                <input
                  type="checkbox"
                  checked={task?.completed}
                  onChange={() => toggleCompleted(index)}
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                />
              </Box>
              <Box
                className="flex"
                style={{
                  flexWrap: "wrap",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <h5 style={{ margin: 15 }}>{task?.text}</h5>
              </Box>
            </Box>
            <Box
              className="flex"
              style={{
                width: "10%",
                flexWrap: "wrap",
              }}
            >
              <CustomButton
                title="Delete"
                onClick={() => onClick(index)}
                bg="red"
              />
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default memo(CustomList);
