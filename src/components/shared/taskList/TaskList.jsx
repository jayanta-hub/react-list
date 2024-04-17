import { useCallback, useEffect, useState } from "react";
import { Box, CustomButton, CustomList, Pagination } from "../../index.jsx";
import { uuid } from "../../../utils/helpers/index.jsx";
import "./taskList.css";
import { CONTAINS } from "../../../utils/constant.jsx";
const TaskList = () => {
  const [tasks, setTasks] = useState(
    Array.from({ length: 100 }, (_, i) => ({
      id: uuid(),
      text: `Item ${i + 1}`,
      isCompleted: false,
    }))
  );
  const [taskInput, setTaskInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const pgBtnCount = 5;

  const maxItemsToShow = 10;

  const totalPages = Math.ceil(tasks?.length / maxItemsToShow);

  const startIndex = (currentPage - 1) * maxItemsToShow;

  const endIndex = Math.min(startIndex + maxItemsToShow, tasks?.length);

  const currentItems = tasks?.slice(startIndex, endIndex);

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
        setTasks((prev) => [{ id: uuid(), text, isCompleted: false }, ...prev]);
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
    (id) => {
      let newTasks = tasks?.filter((item) => item.id !== id);
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
    (id) => {
      let newTasks = tasks?.map((item) => {
        if (item.id === id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
      setTasks(newTasks);
    },
    [tasks]
  );

  const paginationConfig = {
    pageNumber: currentPage,
    pageSize: totalPages,
    pgBtnCount,
    onPreviousClick: handlePrevious,
    onNextClick: handleNext,
    onPageActive: handlePageChange,
  };

  const customListConfig = {
    items: currentItems,
    onDeleteClick: deleteTask,
    onCheckClick: toggleCompleted,
  };
  useEffect(() => {
    if (currentItems?.length === 0) handlePrevious();
  }, [currentItems]);
  return (
    <Box className="task-list-container">
      <h1 className="header-text">{CONTAINS.TASK_LIST}</h1>
      <Box className="task-list-wrapper">
        <input
          type={CONTAINS.TEXT}
          placeholder={CONTAINS.ADD_TASK}
          value={taskInput}
          onChange={(e) => {
            setTaskInput(e.target.value);
          }}
          className="input-field"
        />
        <CustomButton
          title={CONTAINS.ADD}
          onClick={() => addTask(taskInput)}
          disabled={taskInput === ""}
          className={`${
            taskInput === "" ? "disabled-btn" : "bg-blue-500 hover-btn"
          } add-btn`}
        />
      </Box>
      <CustomList {...customListConfig} />
      <Pagination {...paginationConfig} />
    </Box>
  );
};

export default TaskList;
