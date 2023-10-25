import React, { useState, useEffect } from "react";
import About from "./About";
import Experience from "./Experience";
import NavBar from "./NavBar";
import MobileNavBar from "../Mobile/MobileNavBar";
import Profile from "./Profile";
import Projects from "./Projects";
import Footer from "./Footer";

const Home = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    // Add a listener to update the isMobile state when the window is resized.
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts.
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <MobileNavBar /> : <NavBar />}
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </>
  );
};

export default Home;
