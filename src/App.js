import Hello from "./views/Home";
import { ThemeProvider } from "styled-components";

const theme = {
  primary: "#E6484B",
  white: "#fff",
  green: "#0AB67B",
  border_radius: "5px",
  border_radius_lg: "15px",
};

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Hello />
      </ThemeProvider>
    </div>
  );
}

export default App;
