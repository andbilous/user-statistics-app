import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


const PaginationComponent = ({postsPerPage, totalPosts,set}) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (value) => {
    console.log(value)
    set();
  };
  console.log(page)

    return (
      <Pagination count={10} variant="outlined" shape="rounded" onChange={handleChange} />
    )
}

export default PaginationComponent;