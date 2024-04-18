import React from "react";
import { Dashboard } from "./pages/index.jsx";
import { Box, CustomList } from "./components/index.jsx";
const App = () => {
  const customListConfig = {
    items: Array.from({ length: 50 }, (_, i) => ({
      text: `Item ${i + 1}`,
      isCompleted: false,
    })),
    onDeleteClick: () => {},
    onCheckClick: () => {},
  };
  return (
    <Box
      className="bg-gradient-to-br 
    from-sky-200 to-sky-500 
      min-h-[100vh] dark:bg-gradient-to-br
     dark:from-white dark:to-white"
    >
      <Dashboard />
      {/* <CustomList
        {...customListConfig}
        className="bg-blue-600  h-[70vh] overflow-y-auto"
      /> */}
    </Box>
  );
};

export default App;
