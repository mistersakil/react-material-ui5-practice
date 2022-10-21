import { Button } from "@mui/material";
function App() {
  return (
    <>
      <h1>learning material ui</h1>
      <Button>default</Button>
      <Button color="info">info</Button>
      <Button color="success" variant="contained">
        info
      </Button>
      <Button color="error" variant="contained" disabled>
        info
      </Button>
      <Button
        color="error"
        variant="contained"
        href="https://google.com"
        target="_blank"
      >
        info
      </Button>
    </>
  );
}

export default App;
