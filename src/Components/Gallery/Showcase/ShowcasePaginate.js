import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import "./ShowcasePaginate.scss";

const ShowcasePaginate = (props) => {

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Próximo"
      onPageChange={props.handlePageClick}
      pageRangeDisplayed={5}
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
			forcePage={props.selectedPage}
    />
  );
};

export default ShowcasePaginate;
