import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({postsPerPage, totalPosts}) => {

    return (
      <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={5}
          marginPagesDisplayed={50}
          pageRangeDisplayed={5}
          onPageChange={()=>{console.log('222')}}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
    )
}

export default Pagination;