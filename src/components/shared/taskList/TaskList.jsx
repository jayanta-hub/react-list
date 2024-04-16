import { useCallback, useEffect, useState } from "react";
import { Box, CustomButton, CustomList, Pagination } from "../../index.jsx";

const TaskList = () => {
  const [tasks, setTasks] = useState(
    Array.from({ length: 100 }, (_, i) => ({
      text: `Item ${i + 1}`,
      isCompleted: false,
    }))
  );
  const [taskInput, setTaskInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [re, setRe] = useState(0);

  const maxPageNumbersToShow = 5;

  const maxItemsToShow = 10;

  const totalPages = Math.ceil(tasks?.length / maxItemsToShow);

  const startIndex = (currentPage - 1) * maxItemsToShow;

  const endIndex = Math.min(startIndex + maxItemsToShow, tasks?.length);

  const currentItems = tasks?.slice(startIndex, endIndex);

  const newTasks = [...tasks];

  /**
   * Decrements the current page by 1 if the current page is greater than 1.
   *
   * @return {void}
   */
  const handlePrevious = useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  /**
   * Increments the current page if it's not the last page.
   *
   * @return {void} No return value
   */
  const handleNext = useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage]);

  /**
   * A function that handles a change in the current page.
   *
   * @param {number} pageNumber - The new page number to set
   * @return {void}
   */
  const handlePageChange = useCallback(
    (pageNumber) => {
      setCurrentPage(pageNumber);
    },
    [currentPage]
  );

  /**
   * Adds a new task to the task list.
   *
   * @param {string} text - The text of the task to add
   */
  const addTask = useCallback(
    (text) => {
      if (taskInput !== "")
        setTasks((prev) => [{ text, isCompleted: false }, ...prev]);
      setTaskInput("");
      if (currentPage > 1) {
        setCurrentPage(1);
      }
    },
    [taskInput, currentPage]
  );

  /**
   * Deletes a task from the task list.
   *
   * @param {number} index - The index of the task to delete
   * @return {void}
   */
  const deleteTask = useCallback(
    (index) => {
      newTasks.splice(index, 1);
      setTasks(newTasks);
    },
    [tasks]
  );

  /**
   * A function that toggles the isCompleted status of a task at a specific index in the tasks array.
   *
   * @param {number} index - The index of the task to toggle
   * @return {void}
   */
  const toggleCompleted = useCallback(
    (index) => {
      newTasks[index].isCompleted = !newTasks[index].isCompleted;
      setTasks(newTasks);
    },
    [tasks]
  );

  /**
   * The `paginationConfig` constant is an object that contains configuration for the pagination
   * functionality in the TaskList component. Here's a breakdown of each property in the
   * `paginationConfig` object:
   *
   * - `handlePrevious`: A function that is called when the "Previous" button is clicked
   * in the pagination controls. It decrements the `currentPage` state variable if
   * the current page is greater than 1.
   *
   * - `handleNext`: A function that is called when the "Next" button is clicked in the
   * pagination controls. It increments the `currentPage` state variable if the
   * current page is less than the total number of pages.
   *
   * - `handlePageChange`: A function that is called when a page number button is clicked
   * in the pagination controls. It sets the `currentPage` state variable to the
   * clicked page number.
   *
   * - `currentPage`: The current page number.
   *
   * - `totalPages`: The total number of pages based on the number of tasks and the
   * page size (10 tasks per page).
   */

  const paginationConfig = {
    onPreviousClick: handlePrevious,
    onNextClick: handleNext,
    onPageChange: handlePageChange,
    currentPage,
    totalPages,
    maxPageNumbersToShow,
  };

  /**
   *The `customListConfig` constant is an object that contains configuration for the `CustomList`
   * component. Here's a breakdown of each property in the `customListConfig` object:
   *
   * - `onClick`: A function that is called when a task is clicked. It takes the index of
   * the clicked task as an argument and deletes the task from the `tasks` state variable.
   *
   * - `toggleCompleted`: A function that is called when a task is clicked. It takes the index
   * of the clicked task as an argument and toggles the `isCompleted` property of the task in
   * the `tasks` state variable.
   *
   * - `currentItems`: An array of tasks that are displayed on the current page.
   */

  const customListConfig = {
    onClick: deleteTask,
    toggleCompleted: toggleCompleted,
    currentItems,
  };
  console.log("TaskList");
  useEffect(() => {
    if (currentItems?.length === 0) handlePrevious();
  }, [currentItems]);
  return (
    <Box className="max-w-md mx-auto bg-white p-4 shadow-md overflow-hidden md:max-w-2xl rounded-md">
      <h1 className="font-bold text-justify my-2 text-lg">Task List</h1>
      <Box className="flex justify-start items-center">
        <input
          type="text"
          placeholder="Add a task"
          value={taskInput}
          onChange={(e) => {
            setTaskInput(e.target.value);
          }}
          className="border border-gray-300 rounded-md mr-2 p-2"
        />

        <CustomButton
          title="Add"
          onClick={() => addTask(taskInput)}
          disabled={taskInput === ""}
          className={`${
            taskInput === ""
              ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300"
              : "bg-blue-500"
          } rounded py-1 px-1 text-white my-1 mx-1 min-w-6 hover:bg-blue-400 w-20 h-10`}
        />
      </Box>
      {/* <CustomButton title="Add New" onClick={() => setRe((prev) => prev + 1)} /> */}
      <CustomList {...customListConfig} />
      <Pagination {...paginationConfig} />
    </Box>
  );
};

export default TaskList;
