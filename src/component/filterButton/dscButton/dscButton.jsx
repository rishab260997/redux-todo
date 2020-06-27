import React from "react";
import { Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


function DscButton(props) {


  const useStyles = makeStyles((theme) => ({
    boxs: {
      display: "inline-block",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.boxs}>
      <Button
        type="submit"
        size="small"
        variant="contained"
        color="primary"
        onClick={() => props.handleDscSort()}
      >
        DscList
      </Button>{''}
    </div>
  );
}
export default DscButton;
