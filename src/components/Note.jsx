import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerStyles: {
    backgroundColor: "#f5ba13",
    fontFamily: "Montserrat",
    fontSize: "3rem",
    fontWeight: "200"
  },
  contentStyles: {
    fontFamily: "Montserrat",
    fontSize: "1.3rem"
  },
  buttonStyles: {
    margin: "0 auto"
  }
});

function Note(props) {
  const classes = useStyles();


  function handleClick() {
    props.onDelete(props.id);
  }

  function handleHeaderClick() {
    console.log("I got clicked!");
  }

  function checkLenght(value) {
    if (value.length > 21)
      return true;
    else
      return false;
  }

  return (
    <Grid item xs={6} lg={2}>
      <Card>
        <CardHeader
          onClick={handleHeaderClick}
          className={classes.headerStyles}
          title={props.title}
        />
        <CardContent>
          <Typography noWrap={checkLenght(props.content)} className={classes.contentStyles}>
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <button onClick={handleClick} className={classes.buttonStyles}>
            <DeleteIcon />
          </button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Note;
