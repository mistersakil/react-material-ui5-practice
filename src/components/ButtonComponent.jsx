import { Button } from "@mui/material";
import React from "react";
const ButtonComponent = () => {
  return (
    <div>
      <h2>Button component</h2>
      <Button variant="outlined" color="primary">
        outlined primary
      </Button>
      <Button variant="contained" color="info">
        contained info
      </Button>
      <Button color="success">default success</Button>
    </div>
  );
};

export default ButtonComponent;
