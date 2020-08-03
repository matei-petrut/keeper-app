import React from "react";
import { useState } from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Collpse from "@material-ui/core/Collapse";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles({
  headerStyles: {
    backgroundColor: "#f5ba13",
    fontFamily: "McLaren",
    fontSize: "3rem",
    fontWeight: "200"
  },
  contentStyles: {
    fontFamily: "Montserrat",
    fontSize: "1.3rem"
  },
  buttonStyles: {
    margin: "0 auto"
  },
  mouseOverStyles: {
    cursor: "pointer"
  }
});

function Note(props) {
  const classes = useStyles();

  const [isCollapsed, setState] = useState(false);

  function handleClick() {
    props.onDelete(props.id);
  }

  function handleHeaderClick() {
    setState(!isCollapsed);
  }

  return (
    <Grid item xs={6} sm={4} md={3} lg={2}>
      <Card>
        <CardHeader
          onClick={handleHeaderClick}
          className={ clsx({[classes.mouseOverStyles]: true}, {[classes.headerStyles]: true} )}
          title={props.title}
        />
        <Collpse in={isCollapsed}>
          <CardContent>
            <Typography variant="subtitle2" className={classes.contentStyles}>
              {props.content}
            </Typography>
          </CardContent>
        </Collpse>
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
