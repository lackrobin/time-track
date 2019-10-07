import React from "react";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import TextField from "@material-ui/core/TextField";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker
} from "@material-ui/pickers";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export const TimeEntryView = () => {
  const [values, setValues] = React.useState({
    position: "",
    ticket: ""
  });
  const [selectedStartDate, setSelectedStartDate] = React.useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = React.useState(new Date());

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };
  const handleEndDateChange = date => {
    setSelectedEndDate(date);
  };
  const handleStartDateChange = date => {
    setSelectedStartDate(date);
  };
  return (
    <form noValidate autoComplete="off">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <TextField margin="dense" id="position" label="Position" />
        </Grid>
        <Grid item xs={12}>
          <TextField margin="dense" id="ticket" label="Ticket" />
        </Grid>
        <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              margin="normal"
              id="start-time"
              label="Start Time"
              value={selectedStartDate}
              onChange={handleStartDateChange}
              KeyboardButtonProps={{
                "aria-label": "change start time"
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardTimePicker
              margin="normal"
              id="end-time"
              label="End Time"
              value={selectedEndDate}
              onChange={handleEndDateChange}
              KeyboardButtonProps={{
                "aria-label": "change start time"
              }}
            />
          </MuiPickersUtilsProvider>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
          >
            Track
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
