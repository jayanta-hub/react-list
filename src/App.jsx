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
      {/* <Dashboard /> */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <iframe
          src="https://react.dev/learn/start-a-new-react-project"
          title="description"
          height="200px"
          width="300px"
        ></iframe>
        <iframe
          style={{ margin: "10px" }}
          width="966"
          height="543"
          src="https://www.youtube.com/embed/UJoZjKx0SgU"
          title="Best of Arijit Singh 2020 superhit romantic and sad song Arijit Singh"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <marquee behavior="scroll" direction="right">
        Best of <span style={{ color: "red" }}>Arijit Singh</span> 2020 superhit
        romantic and sad song Arijit Singh
      </marquee>
    </Box>
  );
};

export default App;
