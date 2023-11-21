import React from "react";
import SocialIcons from "./SocialIcons";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="footer">
      <div className="container footer-content">
        <div className="footer-copyright">
          <h3>Copyright © {year} </h3>
        </div>
        <SocialIcons classStyle={"footer-icons"} />
      </div>
    </div>
  );
}

export default Footer;
