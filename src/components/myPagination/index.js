import React from 'react';
import Pagination from '@mui/material/Pagination';


const myPagination=({page,setPage,totalPages})=>{
    const handleChange=(e,p)=>{
        setPage(p)
    }

return(


    <div style={{    
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      
        
    }}
      >
        <div style={{
      
          padding: "10px 80px",
         
          width: "100%",
          
        }}>

  
   
   
      <Pagination  color="primary"  
      style={{
        display: "flex",
        justifyContent: "center",
      }} 
      page={page}
      onChange={handleChange}
      count={totalPages}
      />
   
   </div>
    </div>
  );
}
  export default myPagination;