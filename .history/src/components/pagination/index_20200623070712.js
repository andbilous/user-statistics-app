import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


const PaginationComponent = ({postsPerPage, totalPosts,set}) => {
  const [page, setPage] = React.useState(1);
  const handleChange = (e,value) => {
    console.log(value)
    if(value===1){
      setValue(1)
    }
    set(value*50-50);
  };
  console.log(page)

    return (
      <Pagination count={10} variant="outlined" shape="rounded" onChange={handleChange} />
    )
}

export default PaginationComponent;