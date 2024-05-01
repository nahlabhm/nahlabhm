import Footer from "./componants/Footer/Footer";
import Hero from "./componants/Hero/Hero";
import Project from "./componants/ProjectExp/Project";
import Skills from "./componants/Skills/Skills";
import Experience from "./componants/experience/experience";
import Navbar from "./componants/navbar/Navbar";
import React from "react";

const App =() => {
  return (
    <>
    <Navbar />
    <div className="container">
        <Hero /> 
        <Experience />
        <Project />
        <Skills />
    </div>
    <Footer />

   </> 
    );
}

export default App;
