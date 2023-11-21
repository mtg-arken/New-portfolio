import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineUser, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [expand, setExpanded] = useState(false);
  const [navColor, setNavColor] = useState(false);
  const [resize, setResize] = useState(true);

  function scrollHandler() {
    window.scrollY >= 20 ? setNavColor(true) : setNavColor(false);
  }
  window.addEventListener("scroll", scrollHandler);

  function resizeHandler() {
    if (window.innerWidth >= 720) {
      setResize(true);
    } else {
      setResize(false);

    }
  }
  
  window.addEventListener("resize", resizeHandler);
  function updateExpand() {
    setExpanded(!expand);
  }

  return (
    <nav className={navColor ? "sticky" : "navbar"}>
      {resize ? (
        <div className="container nav">
          <div className="tabs">
            <div className="link">
              <Link to="/" className="nav-link">
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Link>
            </div>
            <div className="link">
              <Link to="/about" className="nav-link">
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="expanded-nav-items">
          <span style={{ marginLeft: "auto" }}>
            <AiOutlineMenu
              className="nav-menu"
              onClick={() => updateExpand()}
            />
          </span>
          {expand && (
            <span className="menu-items">
              {" "}
              <Link to="/" className="nav-link" onClick={() => updateExpand()}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Link>
              <Link
                to="/about"
                className="nav-link"
                onClick={() => updateExpand()}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Link>
            </span>
          )}
        </div>
      )}
    </nav>
  );
}

export default NavBar;
