import { ThemeProvider } from "@mui/material";
import "./App.css";
import theme from "./theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { HomeScreen } from "./components/homeScreem";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
