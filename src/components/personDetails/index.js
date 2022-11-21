import Typography from "@mui/material/Typography";
import React from "react";

const PersonDetails = ({ person }) => {  // Don't miss this!

   return (
      <>
         <Typography variant="h3" component="h3">
            {person.name}
         </Typography>

         <Typography variant="h6" component="p">
            Biography
         </Typography>

         <Typography variant="p" component="p">
            {person.biography}
         </Typography>
         <Typography variant="h6" component="p">
            Known For
         </Typography>
      </>
   );
};
export default PersonDetails;