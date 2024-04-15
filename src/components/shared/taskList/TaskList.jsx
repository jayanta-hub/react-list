import { useEffect, useState } from "react";
import { Box, CustomButton, CustomList, Pagination } from "../../index.jsx";

function TaskList() {
  const [tasks, setTasks] = useState(
    Array.from({ length: 50 }, (_, i) => ({
      text: `Item ${i + 1}`,
      completed: false,
    }))
  );
  const [taskInput, setTaskInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(tasks.length / 10);
  const startIndex = (currentPage - 1) * 10;
  const endIndex = Math.min(startIndex + 10, tasks.length);
  const currentItems = tasks.slice(startIndex, endIndex);

  /**
   * Decrements the current page by 1 if the current page is greater than 1.
   *
   * @return {void}
   */
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  /**
   * Increments the current page if it's not the last page.
   *
   * @return {void} No return value
   */
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  /**
   * A function that handles a change in the current page.
   *
   * @param {number} pageNumber - The new page number to set
   * @return {void}
   */
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  /**
   * Adds a new task to the task list.
   *
   * @param {string} text - The text of the task to add
   */
  const addTask = (text) => {
    if (taskInput !== "")
      setTasks((prev) => [{ text, completed: false }, ...prev]);
    setTaskInput("");
    if (currentPage > 1) {
      setCurrentPage(1);
    }
  };

  /**
   * Deletes a task from the task list.
   *
   * @param {number} index - The index of the task to delete
   * @return {void}
   */
  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  /**
   * A function that toggles the completed status of a task at a specific index in the tasks array.
   *
   * @param {number} index - The index of the task to toggle
   * @return {void}
   */
  const toggleCompleted = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

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
    handlePrevious,
    handleNext,
    handlePageChange,
    currentPage,
    totalPages,
  };

  /**
   *The `customListConfig` constant is an object that contains configuration for the `CustomList`
   * component. Here's a breakdown of each property in the `customListConfig` object:
   *
   * - `onClick`: A function that is called when a task is clicked. It takes the index of
   * the clicked task as an argument and deletes the task from the `tasks` state variable.
   *
   * - `toggleCompleted`: A function that is called when a task is clicked. It takes the index
   * of the clicked task as an argument and toggles the `completed` property of the task in
   * the `tasks` state variable.
   *
   * - `currentItems`: An array of tasks that are displayed on the current page.
   */

  const customListConfig = {
    onClick: (index) => deleteTask(index),
    toggleCompleted: (index) => toggleCompleted(index),
    currentItems,
  };

  useEffect(() => {
    if (currentItems?.length === 0) handlePrevious();
  }, [currentItems]);
  return (
    <Box className="task-list">
      <h1>Task List</h1>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Add a task"
          value={taskInput}
          onChange={(e) => {
            setTaskInput(e.target.value);
          }}
        />

        <CustomButton
          title="Add New Task"
          onClick={() => addTask(taskInput)}
          disabled={taskInput === ""}
        />
      </Box>
      <CustomList {...customListConfig} />
      <Pagination {...paginationConfig} />
    </Box>
  );
}

export default TaskList;
