import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


const PaginationComponent = ({postsPerPage, totalPosts,set}) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (value) => {
    setPage(value*50);
  };
  console.log(page)

    return (
      <Pagination count={10} variant="outlined" shape="rounded" onChange={handleChange} />
    )
}

export default PaginationComponent;