import React from "react";
import GreetingLogo from "../../Assets/home-main.svg";
import Type from "./Type";

function Greeting() {
  return (
    <div className="container greeting-content">
      <div className="greeting-header">
        <h1 style={{ paddingBottom: 15 }} className="heading">
          Hello World!{" "}
          <span className="wave" role="img">
            👋🏻
          </span>
        </h1>
        <h1 className="heading-name">
          I'M
          <strong className="main-name"> ARKEN MAATOUG </strong>
        </h1>
        <div style={{ padding: 50, textAlign: "left" }}>
          <Type />
        </div>
      </div>

      <div md={5} style={{ paddingBottom: 20 }}>
        <img
          src={GreetingLogo}
          alt="Greeting pic"
          className="img-fluid"
          style={{ maxHeight: "450px" }}
        />
      </div>
    </div>
  );
}

export default Greeting;
