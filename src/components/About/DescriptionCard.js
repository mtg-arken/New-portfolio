import React from "react";
import { ImPointRight } from "react-icons/im";

function DescriptionCard() {
  return (
    <div className="card quote-card-view">
      <div className="card-body">
        <div className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Arken Maatoug </span>
            from <span className="purple"> Nabeul, tunisia.</span>
            <br /> I am a second Year student pursuing Master's degree. in
            system information engineering from university of Monastir.
            <br />
            Additionally, I am enthusiastic about web development.
            <br />
            <br />
            Some of my hobbies are
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving algorithmic problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Continuous Learning
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
          </ul>
          <a
            href={require("../../Assets/CV.pdf")}
            target="_blank"
            className="cv"
            rel="noreferrer"
          >
            Curriculum vitae
          </a>
        </div>
      </div>
    </div>
  );
}

export default DescriptionCard;
