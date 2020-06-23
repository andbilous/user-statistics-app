import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import './pagination.scss'


const PaginationComponent = ({postsPerPage, totalPosts,setPage}) => {
  const handleChange = (e,value) => {
        if(value===1){
      setPage(1)
    }else{
      setPage(value*postsPerPage-(postsPerPage-1));
    }
   
  };

    return (
      <Pagination 
      count={totalPosts/postsPerPage} 
      variant="outlined" 
      shape="rounded" 
      onChange={handleChange} 
      />
    )
}

export default PaginationComponent;