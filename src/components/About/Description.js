import React from 'react'
import DescriptionCard from "./DescriptionCard";
import myImage from "../../Assets/myImage.jpg";
import Tilt from "react-parallax-tilt";

function Description() {
  return (
    <div className="row" style={{ padding: "10px" }}>
            <div
              className="col-md-7"
              style={{
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <DescriptionCard />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                paddingTop: "30px",
                paddingBottom: "30px",
              }}
              className="col-md-5 about-img "
            >
              <Tilt>
                <img
                  src={myImage}
                  alt="about"
                  className="img-fluid rounded-circle"
                />
              </Tilt>
            </div>
          </div>
  )
}

export default Description