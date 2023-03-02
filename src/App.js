import Header from "./components/Header";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { Box } from "@mui/system";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Box padding={10}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
