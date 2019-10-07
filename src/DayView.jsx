import React from "react";
import "date-fns";
import Grid from "@material-ui/core/Grid";


export const DayView = () => {
  const currentHours = "00";
  const currentMinutes = "00";
  const currentSeconds = "00";
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h1>{`${currentHours}:${currentMinutes}:${currentSeconds}`}</h1>
      </Grid>
    </Grid>
  );
};