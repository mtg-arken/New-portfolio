import React from "react";
import { BsFiletypeSql } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiJava,
  DiBootstrap,
} from "react-icons/di";
import { BsFiletypeScss } from "react-icons/bs";
function TechStack() {
  return (
    <>
      <h1>
        Professional <strong className="purple">Skillset </strong>
      </h1>{" "}
      <div
        className="row"
        style={{ justifyContent: "center", paddingBottom: "50px" }}
      >
        <div className="col-lg-3 col-md-4  tech-icons">
          <DiJavascript1 />
        </div>

        <div className="col-lg-3 col-md-4  tech-icons">
          <DiReact />
        </div>
        <div className="col-lg-3 col-md-4  tech-icons">
          <BsFiletypeScss />
        </div>
        <div className="col-lg-3 col-md-4  tech-icons">
          <DiNodejs />
        </div>
        <div className="col-lg-3 col-md-4  tech-icons">
          <SiMongodb />
        </div>
        <div className="col-lg-3 col-md-4  tech-icons">
          <BsFiletypeSql />
        </div>
        <div className="col-lg-3 col-md-4  tech-icons">
          <DiJava />
        </div>
        <div className="col-lg-3 col-md-4  tech-icons">
          <DiGit />
        </div>
      </div>
    </>
  );
}

export default TechStack;
