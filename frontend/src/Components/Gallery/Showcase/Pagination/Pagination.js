import React from "react";
import ReactPaginate from "react-paginate";

import "./Pagination.scss";

const Pagination = (props) => {
  return (
    <div className="pagination-container">
      <ReactPaginate
        breakLabel="..."
        nextLabel="Próximo"
        onPageChange={props.handlePageClick}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        pageCount={props.pageCount}
        previousLabel="Anterior"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item-p-n"
        previousLinkClassName="page-link"
        nextClassName="page-item-p-n"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default React.memo(Pagination);
