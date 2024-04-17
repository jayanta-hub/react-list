import React from "react";
import { Dashboard } from "./pages/index.jsx";
import { Box } from "./components/index.jsx";
const App = () => {
  return (
    <Box
      className="bg-gradient-to-br 
    from-sky-200 to-sky-500 
      min-h-[100vh] dark:bg-gradient-to-br
     dark:from-white dark:to-white"
    >
      <Dashboard />
    </Box>
  );
};

export default App;
