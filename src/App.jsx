import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
// import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
// import Testimonials from "./components/testimonials/testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollUp/ScrollUp";
import ProjectCarousal from "./components/projectCarousal/ProjectCarousal";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <ProjectCarousal />
        <Skills />
        <Work />
        {/* <Services /> */}
        {/* <Testimonials /> */}

        <Qualification />
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
