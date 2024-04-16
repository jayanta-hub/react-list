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
    <Box className="flex wrap customList">
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
                className="flex wrap"
                style={{
                  padding: "5px",
                }}
              >
                <input
                  type="checkbox"
                  checked={task?.isCompleted}
                  onChange={() => toggleCompleted(index)}
                  style={{
                    height: "20px",
                    width: "20px",
                  }}
                />
              </Box>
              <Box
                className="flex wrap"
                style={{
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              >
                <h5 style={{ margin: 15 }}>{task?.text}</h5>
              </Box>
            </Box>
            <Box
              className="flex wrap"
              style={{
                width: "10%",
              }}
            >
              <CustomButton
                title="Delete"
                onClick={() => onClick(index)}
                bg="red"
                style={{
                  width: "fit-content",
                }}
              />
            </Box>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default memo(CustomList);
