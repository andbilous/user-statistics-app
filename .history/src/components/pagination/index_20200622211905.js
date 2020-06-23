import React from 'react';
import ReactPaginate from 'react-paginate';


const Pagination = ({postsPerPage, totalPosts}) => {

    return (
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <a href='!#' className="page-link">
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    )
}

export default Pagination;