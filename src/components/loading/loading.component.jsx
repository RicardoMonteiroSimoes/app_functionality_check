import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading(props) {


  const useStyles = makeStyles((theme) => ({
    Loading: {
      fontSize: '45px',
      color: 'white',
      margin: 'auto',
      width: '250px',
      textAlign: 'center'
    }
  }
  ));

  const classes = useStyles();

  return (
    <div className={classes.Loading}>
      <h6>{props.text}</h6>
      <FontAwesomeIcon icon={faSpinner} pulse />
    </div>
  );
};