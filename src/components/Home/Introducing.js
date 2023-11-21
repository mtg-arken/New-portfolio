import React from "react";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import SocialIcons from "../SocialIcons";

function Introducing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 Introducing-description">
          <h1 style={{ fontSize: "2.6em" }}>
            LET ME <span className="purple"> INTRODUCE </span> MYSELF
          </h1>
          <p className="Introducing-body">
            I am fluent in classics like
            <i>
              <b className="purple"> JS and Java. </b>
            </i>
            <br />
            <br />
            I debug more than I code.
            <br />
            <br />I think that The most
            <i>
              <b> powerful </b>
              people are the ones who never stop
              <b> learning</b>
            </i>
          </p>
        </div>
        <div className="col-md-4  myAvatar">
          <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 Introducing-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <SocialIcons
            classStyle={"Introducing-social-links"}
            socialIcon={"social-icon"}
          />
        </div>
      </div>
    </div>
  );
}
export default Introducing;
