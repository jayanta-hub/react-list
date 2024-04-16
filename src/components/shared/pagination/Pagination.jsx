import React, { memo } from "react";
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
        className={`rounded-md py-1 px-2  my-1 mx-1 min-w-6 text-center 
        focus:bg-transparent 
        focus:border
         focus:border-blue-400 
         focus:text-blue-500  ${
           currentPage === i
             ? "bg-transparent border border-blue-400 text-blue-500 "
             : "bg-blue-500 text-white"
         }`}
        onClick={() => onPageChange(i)}
      />
    );
  }

  if (totalPages > maxPageNumbersToShow + 2) {
    // Add ellipsis for hidden pages in the middle
    if (startPage > 1) {
      pageNumbers.unshift(<span key="ellipsis-before">...</span>);
    }
    if (endPage < totalPages) {
      pageNumbers.push(<span key="ellipsis-after">...</span>);
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
        onClick={onPreviousClick}
        className={`${
          currentPage === 1
            ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300"
            : "bg-blue-500"
        } rounded-md py-1 px-2 text-white my-1 mx-1 min-w-6 hover:bg-blue-400`}
      />
      {pageNumbers}
      <CustomButton
        title="Next"
        onClick={onNextClick}
        className={`${
          currentPage === totalPages || totalPages === 0
            ? "bg-gray-300 cursor-not-allowed hover:bg-gray-300"
            : "bg-blue-500"
        } rounded-md py-1 px-2 text-white my-1 mx-1 min-w-6 hover:bg-blue-400`}
      />
    </Box>
  );
  return <>{renderPaginationControls()}</>;
};

export default memo(Pagination);
