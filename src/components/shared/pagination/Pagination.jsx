import React, { memo } from "react";
import "./pagination.css";
import { Box, CustomButton } from "../../index.jsx";
const Pagination = ({
  onPreviousClick,
  onNextClick,
  onPageChange,
  currentPage = 0,
  totalPages = 0,
  maxPageNumbersToShow = 5,
}) => {
  const pageNumbers = [];

  /*
   * This is calculating the starting page number for the pagination component based on the current
   * page, total number of pages, and the maximum number of page numbers to show.
   */
  const startPage = Math.max(
    Math.min(
      currentPage - Math.floor(maxPageNumbersToShow / 2),
      totalPages - maxPageNumbersToShow + 1
    ),
    1
  );

  /*
   * This is calculating the end page number for the pagination component.
   */
  const endPage = Math.min(startPage + maxPageNumbersToShow - 1, totalPages);

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
        className={`button ${currentPage === i ? "active" : ""}`}
        onClick={() => onPageChange(i)}
        style={{ margin: "0 5px" }}
      />
    );
  }

  if (totalPages > maxPageNumbersToShow + 2) {
    // Add ellipsis for hidden pages in the middle
    if (startPage > 1) {
      pageNumbers.unshift(<span key="ellipsis-before">...</span>);
    }
    if (endPage < totalPages - 1) {
      pageNumbers.push(<span key="ellipsis-after">...</span>);
    }
  }

  /**
   * Renders pagination controls for navigating between pages.
   *
   * @return {JSX.Element} The pagination controls JSX element.
   */
  const renderPaginationControls = () => (
    <Box
      className="paginationContainer"
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <CustomButton
        title="Previous"
        onClick={onPreviousClick}
        disabled={currentPage === 1}
        style={{ marginRight: "5px" }}
      />
      {pageNumbers}
      <CustomButton
        title="Next"
        onClick={onNextClick}
        disabled={currentPage === totalPages || totalPages === 0}
        style={{ marginLeft: "5px" }}
      />
    </Box>
  );
  console.log("Pagination", currentPage, totalPages, maxPageNumbersToShow);
  return <>{renderPaginationControls()}</>;
};

export default memo(Pagination);
