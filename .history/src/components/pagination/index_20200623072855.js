import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


const PaginationComponent = ({postsPerPage, totalPosts,setPage}) => {
  const handleChange = (e,value) => {
    console.log(value)
    if(value===1){
      setPage(1)
    }else{
      setPage(value*50-49);
    }
   
  };

    return (
      <Pagination count={totalPosts/} variant="outlined" shape="rounded" onChange={handleChange} />
    )
}

export default PaginationComponent;