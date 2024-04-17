import React from "react";
import { Box, Pagination, TaskList } from "../../components/index.jsx";

const Dashboard = () => {
  return (
    <Box className="container items-center py-5">
      <TaskList />
      {/* <Pagination /> */}
    </Box>
  );
};

export default Dashboard;
