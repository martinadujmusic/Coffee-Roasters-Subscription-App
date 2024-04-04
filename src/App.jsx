import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import CreateYourOrder from "./pages/Plan";
import Heading from "./components/Heading";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<CreateYourOrder />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
