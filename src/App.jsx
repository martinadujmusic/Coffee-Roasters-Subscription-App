import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Heading from "./components/common/Heading";
import Footer from "./components/common/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
