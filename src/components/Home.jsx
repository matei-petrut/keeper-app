import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  typographyStyles: {
    margin: "5%",
    padding: "0 25%",
    fontFamily: "Acme",
    color: "#5c636e"
  },
  buttonStyles: {
    margin: "3%"
  }
}));

function Home() {

  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Grid item xs={12}>
          <Typography variant="h1" align="center" className={classes.typographyStyles}>
            Remember the important things
          </Typography>
        </Grid>
      </Grid>
      <Grid container item justify="center">
        <Button
          variant="contained"
          className={classes.buttonStyles}
          size="large"
        >Login</Button>
        <Button
          variant="contained"
          className={classes.buttonStyles}
          size="large"
        >Sign in</Button>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

export default Home;
