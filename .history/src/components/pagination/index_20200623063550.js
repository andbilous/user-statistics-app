import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({postsPerPage, totalPosts}) => {

    return (
      <ReactPaginate
          previousLabel={'previous'}
          breakLabel={<span className="gap">...</span>}
          breakClassName={'break-me'}
          pageCount={5}
          marginPagesDisplayed={50}
          pageRangeDisplayed={50}
          onPageChange={()=>{console.log('222')}}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          disabledClassName={"disabled"}
          activeClassName={"active"}
        />
    )
}

export default Pagination;