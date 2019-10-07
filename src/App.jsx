import React from "react";
import Grid from "@material-ui/core/Grid";
import { TimeEntryView } from "./TimeEntryView";
import { DayView } from "./DayView";
import { render } from "react-dom";
import { Box, Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TimerIcon from "@material-ui/icons/Timer";


const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Router>
      <Container maxWidth="sm" className="main">
        <Box>
          <Link to="/">x</Link>
          <Link to="/day">y</Link>
        </Box>

        <Box>
          <Switch>
            <Route path="/day">
              <DayView />
            </Route>
            <Route path="/">
              <TimeEntryView />
            </Route>
          </Switch>
        </Box>
      </Container>
    </Router>
  );
};

render(<App />, document.getElementById("root"));
