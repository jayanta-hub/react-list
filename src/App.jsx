import React from "react";
import { Dashboard } from "./pages/index.jsx";
import "./assets/css/commonStyles.css";
import { Box } from "./components/index.jsx";
const App = () => {
  return (
    <Box className="container">
      <Dashboard />
    </Box>
  );
};

export default App;
