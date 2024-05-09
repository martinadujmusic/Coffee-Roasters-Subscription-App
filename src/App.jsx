import { Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";

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
      <ToastContainer
        position="top-center"
        pauseOnFocusLoss={false}
        theme="colored"
        autoClose={2500}
        closeOnClick={true}
      />
      <Heading />
      <Routes>
        <Route path="/" element={<Plan />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
