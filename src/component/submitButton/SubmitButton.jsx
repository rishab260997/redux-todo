import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function SubmitButton(props) {
  const useStyles = makeStyles((theme) => ({
    boxs: {
      display: "inline-block",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.boxs}>
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        value="Submit"
      >
        Submit
      </Button>
    </div>
  );
}
export default SubmitButton;
