import React from "react";
import { Dashboard } from "./pages/index.jsx";
// import "./assets/css/commonStyles.css";
import { Box } from "./components/index.jsx";
const App = () => {
  return (
    <Box className="bg-[#67e8f9] min-h-[100vh]">
      <Dashboard />
    </Box>
  );
};

export default App;
