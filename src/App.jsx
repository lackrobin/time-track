import React from "react";
import Grid from "@material-ui/core/Grid";
import { TimeEntryView } from "./TimeEntryView"
import { render } from "react-dom";
import { Box, Container } from "@material-ui/core";

const App = () => {
  
  return (
    <Container maxWidth={"md"}>
    <Grid container spacing={1}>
      <Grid item xs={12}>
        
       <TimeEntryView></TimeEntryView>
      
      </Grid>
    </Grid>
    </Container>
  );
};

render(<App />, document.getElementById("root"));
