import React, { memo } from "react";
import { Box, CustomButton } from "../../index.jsx";
import "./pagination.css";
import { CONTAINS } from "../../../utils/constant.jsx";
import { DOTS, usePagination } from "../../../utils/hooks/usePagination.js";
const Pagination = ({
  onPageActive,
  pageNumber = 1,
  pageSize = 10,
  siblingCount = 5,
  totalCount,
}) => {
  const paginationRange = usePagination({
    totalCount,
    siblingCount,
    pageSize,
    currentPage: pageNumber,
  });

  if (totalCount === 0 || paginationRange.length < 1) {
    return null;
  }
  const onNext = () => {
    onPageActive(pageNumber + 1);
  };

  const onPrevious = () => {
    onPageActive(pageNumber - 1);
  };
  let lastPage = paginationRange[paginationRange.length - 1];
  const prevBtnClassName =
    pageNumber === 1 ? "disabled-btn" : "pg-active-btn-color hover-btn";

  const nextBtnClassName =
    pageNumber === lastPage ? "disabled-btn" : "pg-active-btn-color hover-btn";

  return (
    <>
      <Box className="pg-wrapper">
        <CustomButton
          title={CONTAINS.PREVIOUS}
          onClick={onPrevious}
          disabled={pageNumber === 1 || pageNumber === 0}
          className={`next-prev-btn ${prevBtnClassName}`}
        />

        {paginationRange.map((item) => {
          if (item === DOTS) {
            return <Box className="dots ">&#8230;</Box>;
          }
          return (
            <CustomButton
              key={item}
              title={item}
              onClick={() => onPageActive(item)}
              className={`pg-btn ${
                item === pageNumber ? "pg-active-btn" : "pg-active-btn-color"
              }`}
            />
          );
        })}
        <CustomButton
          title={CONTAINS.NEXT}
          onClick={onNext}
          disabled={pageNumber === lastPage}
          className={`next-prev-btn ${nextBtnClassName}`}
        />
      </Box>
    </>
  );
};

export default memo(Pagination);
