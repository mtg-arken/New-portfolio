import React from "react";
import TechStack from "./TechStack";

import Description from "./Description";
import Projects from "./Projects";
import Contact from "./Contact";

function About() {
  return (
    <div className=" about-section">
      <div className="container">
        <Description />
        <TechStack />
        <Projects />
        <Contact/>
      </div>
    </div>
  );
}

export default About;
