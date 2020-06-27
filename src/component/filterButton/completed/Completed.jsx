import React from "react";

function CompletedButton(props) {


  return (
    <div>
      <Button
        type="submit"
        size="small"
        variant="contained"
        color="primary"
        onClick={() => props.handleClickCompleted()}
      >
        Completed
      </Button>
    </div>
  );
}
export default CompletedButton;
