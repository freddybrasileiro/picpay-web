import React from "react";
import Grid from "@material-ui/core/Grid";

import Toolbar from "components/Toolbar/";
import UsersList from "containers/UsersList/";

const App = () => (
  <Grid container justify="center" direction="row">
    <Grid item xs={12} md={12}>
      <Toolbar />
    </Grid>
    <Grid item xs={12} md={6}>
      <UsersList />
    </Grid>
  </Grid>
);

export default App;
