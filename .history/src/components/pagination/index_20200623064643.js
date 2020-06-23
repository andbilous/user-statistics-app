import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


const PaginationComponent = ({postsPerPage, totalPosts}) => {

    return (
      <Pagination count={10} variant="outlined" shape="rounded" />
    )
}

export default PaginationComponent;