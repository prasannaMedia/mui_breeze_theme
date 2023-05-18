import "./App.css";
import Home from "./components/Home/Home";
import { About } from "./components/About/About";
import { Pricing } from "./components/Pricing/Pricing";
import { Info } from "./components/Info/Info";
import { Footer } from "./components/Footer/Footer";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif", // Replace 'Roboto' with your desired sans-serif font
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="shadow"></div>
        <Home />
        <About />
        <Pricing />
        <Info />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
