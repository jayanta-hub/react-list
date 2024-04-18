// import React, { memo } from "react";
// import { Box, CustomButton } from "../../index.jsx";
// import "./pagination.css";
// import { CONTAINS } from "../../../utils/constant.jsx";
// const Pagination = ({
//   onPreviousClick,
//   onNextClick,
//   onPageActive,
//   pageNumber = 1,
//   pageSize = 10,
//   pgBtnCount = 5,
// }) => {
//   const pageNumbers = [];

//   /*
//    * This is calculating the starting page number for the pagination component based on the current
//    * page, total number of pages, and the maximum number of page numbers to show.
//    */
//   const startPage = Math.max(
//     Math.min(
//       pageNumber - Math.floor(pgBtnCount / 2),
//       pageSize - pgBtnCount + 1
//     ),
//     1
//   );
//   /*
//    * This is calculating the end page number for the pagination component.
//    */
//   const endPage = Math.min(startPage + pgBtnCount - 1, pageSize);
//   /**
//    * The `for` loop in the code snippet is iterating over a range of page numbers starting from
//    * `startPage` to `endPage`. For each page number within this range, a `CustomButton` component is
//    * created and added to the `pageNumbers` array.
//    */

//   for (let i = startPage; i <= endPage; i++) {
//     if (i !== 1 && i !== pageSize) {
//       pageNumbers.push(
//         <CustomButton
//           key={i}
//           title={i}
//           className={`pg-btn ${
//             pageNumber === i ? "pg-active-btn" : "pg-active-btn-color"
//           }`}
//           onClick={() => onPageActive(i)}
//         />
//       );
//     }
//   }

//   if (pageSize > pgBtnCount + 2) {
//     // Add ellipsis for hidden pages in the middle
//     if (startPage > 1 && pageNumbers[0].props.title !== 2) {
//       pageNumbers.unshift(
//         <span key="before" className="span">
//           ...
//         </span>
//       );
//     }
//     if (endPage < pageSize) {
//       pageNumbers.push(
//         <span key="after" className="span">
//           ...
//         </span>
//       );
//     }
//   }
//   /**
//    * Renders pagination controls for navigating between pages.
//    *
//    * @return {JSX.Element|null} The pagination controls JSX element or null.
//    */
//   const renderPaginationControls = () => {
//     const prevBtnClassName =
//       pageNumber === 1 ? "disabled-btn" : "pg-active-btn-color hover-btn";

//     const nextBtnClassName =
//       pageNumber === pageSize || pageSize === 0
//         ? "disabled-btn"
//         : "pg-active-btn-color hover-btn";

//     return (
//       <Box className="pg-wrapper">
//         <CustomButton
//           title={CONTAINS.PREVIOUS}
//           onClick={onPreviousClick}
//           className={`next-prev-btn ${prevBtnClassName}`}
//         />
//         {endPage > 0 && (
//           <CustomButton
//             title={1}
//             className={`pg-btn ${
//               pageNumber === 1 ? "pg-active-btn" : "pg-active-btn-color"
//             }`}
//             onClick={() => onPageActive(1)}
//           />
//         )}
//         {pageNumbers}
//         {endPage !== 1 && endPage > 0 && (
//           <CustomButton
//             title={pageSize}
//             className={`pg-btn ${
//               pageNumber === pageSize ? "pg-active-btn" : "pg-active-btn-color"
//             }`}
//             onClick={() => onPageActive(pageSize)}
//           />
//         )}
//         <CustomButton
//           title={CONTAINS.NEXT}
//           onClick={onNextClick}
//           className={`next-prev-btn ${nextBtnClassName}`}
//         />
//       </Box>
//     );
//   };

//   return <>{renderPaginationControls()}</>;
// };

// export default memo(Pagination);

import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../../../utils/hooks/usePagination";
import "./pagination.css";
import { Box, CustomButton } from "../../index.jsx";
import { CONTAINS } from "../../../utils/constant.jsx";

const Pagination = (props) => {
  const {
    onPageChange,
    totalCount = 100,
    siblingCount = 2,
    currentPage = 5,
    pageSize = 10,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  console.log("🚀 ~ Pagination ~ paginationRange:", paginationRange);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }
  console.log("🚀 ~ Pagination ~ paginationRange:", paginationRange);

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];
  const prevBtnClassName =
    currentPage === 1 ? "disabled-btn" : "pg-active-btn-color hover-btn";

  const nextBtnClassName =
    currentPage === lastPage ? "disabled-btn" : "pg-active-btn-color hover-btn";

  return (
    <ul className="pagination-container">
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {/* <CustomButton
        title={CONTAINS.PREVIOUS}
        onClick={onPrevious}
        className={`next-prev-btn ${prevBtnClassName}`}
      /> */}
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="dots">&#8230;</li>;
        }

        return (
          <li
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
      {/* <CustomButton
        title={CONTAINS.NEXT}
        onClick={onNext}
        className={`next-prev-btn ${nextBtnClassName}`}
      /> */}
    </ul>
  );
};

export default Pagination;
