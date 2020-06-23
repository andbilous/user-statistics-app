import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({postsPerPage, totalPosts}) => {

    return (
      <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={1000}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={()=>{console.loo}}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
    )
}

export default Pagination;