import { useCallback, useState } from "react";
import { Box, CustomButton, CustomList } from "../../index.jsx";
import "./taskList.css";
import { uuid } from "../../../utils/helpers/index.jsx";
const TaskList = () => {
  const [tasks, setTasks] = useState(
    Array.from({ length: 100 }, (_, i) => ({
      id: uuid(),
      text: `Item ${i + 1}`,
      isCompleted: false,
    }))
  );
  const [taskInput, setTaskInput] = useState("");

  /**
   * Adds a new task to the task list.
   *
   * @param {string} text - The text of the task to add
   */
  const addTask = (text) => {
    if (taskInput !== "")
      setTasks((prev) => [{ id: uuid(), text, isCompleted: false }, ...prev]);
    setTaskInput("");
  };

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

  const customListConfig = {
    items: tasks,
    onDeleteClick: deleteTask,
    onCheckClick: toggleCompleted,
  };

  return (
    <Box className="task-list-container max-h-80 ">
      <h1 className="header-text">Task List</h1>
      <Box className="task-list-wrapper">
        <input
          type="text"
          placeholder="Add a task"
          value={taskInput}
          onChange={(e) => {
            setTaskInput(e.target.value);
          }}
          className="input-field"
        />
        <CustomButton
          title="Add"
          onClick={() => addTask(taskInput)}
          disabled={taskInput === ""}
          className={`${
            taskInput === "" ? "disabled-btn" : "bg-blue-500 hover-btn"
          } add-btn`}
        />
      </Box>
      <CustomList {...customListConfig} />
    </Box>
  );
};

export default TaskList;
