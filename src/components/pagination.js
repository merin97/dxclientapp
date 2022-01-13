import React from "react";
import propTypes from "prop-types";
import _ from "lodash";

const Pagination = ({ itemCount, pageSize, currentPage, onPageChange }) => {
  console.log("rendering");

  const pageCount = Math.ceil(itemCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
 
  return (
    <nav className="d-flex justify-content-center">
      <ul className="pagination">
        {pages.map((page) => ( 
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemCount: propTypes.number.isRequired,
  pageSize: propTypes.number.isRequired,
  currentPage: propTypes.number.isRequired,
  onPageChange: propTypes.func.isRequired,
};

export default Pagination;
