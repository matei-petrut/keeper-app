import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid } from "@material-ui/core"
import TextField from '@material-ui/core/TextField';

function SignUp() {

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid container item alignItems="center" justify="center">
        <form autoComplete="off">
          <TextField id="email" label="Email"/>
        </form>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );

}

export default SignUp;
