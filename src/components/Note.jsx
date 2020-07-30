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
  cardStyles: {
    backgroundColor: "#f9d56e"
  }
});

function Note(props) {
  const classes = useStyles();


  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <Grid item xs={6} lg={3}>
      <Card>
        <CardHeader
          className={classes.cardStyles}
          title={props.title}
        />
        <CardContent>
          <Typography>
            {props.content}
          </Typography>
        </CardContent>
        <CardActions>
          <button onClick={handleClick}>
            <DeleteIcon />
          </button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default Note;
