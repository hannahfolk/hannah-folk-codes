// Dependencies
import React, { useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Custom Styles
import "./App.scss";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Scroll to section based on URL path
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "") || "home";
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <Router>
      <ScrollToSection />
      <Home />
      <Navbar />
      <main>
        <About />
        <Skills />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
