import React, { useEffect, useState } from "react";
import { Box, TaskList } from "../../components/index.jsx";
import { fetchWithRetry } from "../../utils/helpers/index.jsx";

const Dashboard = () => {
  const [apiData, setApiData] = useState("");
  const [isLoding, setIsloading] = useState(false);
  const [isError, setIsError] = useState("");
  const fetchData = async () => {
    setIsloading(true);
    try {
      const result = await fetchWithRetry(
        "https://dummyjson.com/produc",
        {},
        3,
        2000
      )
        .then((res) => console.log(res, "res"))
        .catch((err) => {
          console.log("errsss", err);
        });
      setApiData(result);
    } catch (err) {
      setIsError(err?.message || "Something went wrong.");
    } finally {
      setIsloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (isError) {
    return <div>Error:{isError}</div>;
  }
  if (isLoding) {
    return <div>Loading...</div>;
  }
  return (
    <Box className="container items-center py-5">
      {JSON.stringify(apiData)}
      <TaskList />
    </Box>
  );
};

export default Dashboard;
