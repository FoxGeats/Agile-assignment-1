import React from "react";
import Header from "../headerMovieList";
import PersonList from "../personList";
import Grid from "@mui/material/Grid";

function PersonListPageTemplate({ persons, title, action }) {

  let displayedPersons = persons

  return (
    <Grid container sx={{ padding: '20px' }}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
      
        <PersonList action={action} persons={displayedPersons}></PersonList>
      </Grid>
    </Grid>
  );
}
export default PersonListPageTemplate;