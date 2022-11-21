import React from "react";
import { Link} from "react-router-dom";


import Paper from "@mui/material/Paper";

function LogoutPage() {
 

  const root = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
};

  return (
    
    <>
    <Paper 
    component="ul" 
    sx={{...root}}
  >
    <li>
        <h2>LOG OUT</h2>
        

</li>
      </Paper>   

        <Paper 
    component="ul" 
    sx={{...root}}
  >
        <li>
          <Link to="/">Return to home page</Link>
        </li>
        </Paper>
       
   </>
  );
}
export default LogoutPage;