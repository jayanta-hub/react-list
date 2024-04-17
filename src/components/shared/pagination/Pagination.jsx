import React, { useEffect, useState } from "react";
import { Box, CustomButton, CustomList } from "../../index.jsx";
import "./pagination.css";
import { uuid } from "../../../utils/helpers/index.jsx";
const Pagination = ({ pageNumber = 1, pageSize = 10, pgBtnCount = 5 }) => {
  const [tasks, setTasks] = useState(
    Array.from({ length: 100 }, (_, i) => ({
      id: uuid(),
      text: `Item ${i + 1}`,
      isCompleted: false,
    }))
  );
  const [currentPage, setCurrentPage] = useState(1);

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
   * Deletes a task from the task list.
   *
   * @param {number} index - The index of the task to delete
   * @return {void}
   */
  const deleteTask = (id) => {
    let newTasks = tasks?.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  /**
   * A function that toggles the isCompleted status of a task at a specific index in the tasks array.
   *
   * @param {number} index - The index of the task to toggle
   * @return {void}
   */
  const toggleCompleted = (id) => {
    let newTasks = tasks?.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setTasks(newTasks);
  };

  const customListConfig = {
    items: currentItems,
    onDeleteClick: deleteTask,
    onCheckClick: toggleCompleted,
  };
  useEffect(() => {
    if (currentItems?.length === 0) handlePrevious();
  }, [currentItems]);

  const pageNumbers = [];

  /*
   * This is calculating the starting page number for the pagination component based on the current
   * page, total number of pages, and the maximum number of page numbers to show.
   */
  const startPage = Math.max(
    Math.min(
      pageNumber - Math.floor(pgBtnCount / 2),
      pageSize - pgBtnCount + 1
    ),
    1
  );

  /*
   * This is calculating the end page number for the pagination component.
   */
  const endPage = Math.min(startPage + pgBtnCount - 1, pageSize);

  /**
   * The `for` loop in the code snippet is iterating over a range of page numbers starting from
   * `startPage` to `endPage`. For each page number within this range, a `CustomButton` component is
   * created and added to the `pageNumbers` array.
   */

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <CustomButton
        key={i}
        title={i}
        className={`pg-btn ${
          pageNumber === i ? "pg-active-btn" : "pg-active-btn-color"
        }`}
        onClick={() => handlePageChange(i)}
      />
    );
  }

  if (pageSize > pgBtnCount + 2) {
    // Add ellipsis for hidden pages in the middle
    if (startPage > 1) {
      pageNumbers.unshift(
        <span key="before" className="span">
          ...
        </span>
      );
    }
    if (endPage < pageSize) {
      pageNumbers.push(
        <span key="after" className="span">
          ...
        </span>
      );
    }
  }
  /**
   * Renders pagination controls for navigating between pages.
   *
   * @return {JSX.Element} The pagination controls JSX element.
   */
  const renderPaginationControls = () => (
    <Box className="flex justify-end items-center w-full">
      <CustomButton
        title="Previous"
        onClick={handlePageChange}
        className={`next-prev-btn ${
          pageNumber === 1 ? "disabled-btn" : "pg-active-btn-color hover-btn"
        }`}
      />
      {pageNumbers}
      <CustomButton
        title="Next"
        onClick={handleNext}
        className={`next-prev-btn ${
          pageNumber === pageSize || pageSize === 0
            ? "disabled-btn"
            : "pg-active-btn-color hover-btn"
        }`}
      />
    </Box>
  );
  return (
    <>
      <CustomList {...customListConfig} />
      {renderPaginationControls()}
    </>
  );
};

export default Pagination;
