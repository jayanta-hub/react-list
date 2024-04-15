import React from "react";
import "./pagination.css";
import { Box, CustomButton } from "../../index.jsx";
const Pagination = ({
  handlePrevious,
  handleNext,
  handlePageChange,
  currentPage,
  totalPages,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  /**
   * Renders pagination controls for navigating between pages.
   *
   * @return {JSX.Element} The pagination controls JSX element.
   */
  const renderPaginationControls = () => (
    <Box className="paginationContainer">
      <CustomButton
        title="Previous"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      />
      {pageNumbers?.map((pageNumber) => (
        <CustomButton
          key={pageNumber}
          title={pageNumber}
          className={`button ${currentPage === pageNumber ? "active" : ""}`}
          onClick={() => handlePageChange(pageNumber)}
          style={{ margin: "0 5px" }}
        />
      ))}
      <CustomButton
        title="Next"
        onClick={handleNext}
        disabled={currentPage === totalPages || totalPages === 0}
        style={{ marginLeft: "5px" }}
      />
    </Box>
  );

  return <>{renderPaginationControls()}</>;
};

export default Pagination;
