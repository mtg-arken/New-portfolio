import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Swal from "sweetalert2";

function SocialIcons(params) {
  return (
    <ul className={`${params.classStyle} `}>
      <li className="social-icons">
        <a
          href="https://github.com/mtg-arken"
          target="_blank"
          rel="noreferrer"
          className={`icon-color ${params.socialIcon}`}
        >
          <AiFillGithub />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/mohamed-arken-maatoug/"
          target="_blank"
          rel="noreferrer"
          className={`icon-color ${params.socialIcon}`}
        >
          <FaLinkedinIn />
        </a>
      </li>
      <li
        className="social-icons"
        onClick={() => Swal.fire("maatougarken@gmail.com")}
      >
        <div className={`icon-color ${params.socialIcon}`}>
          <AiOutlineMail />
        </div>
      </li>
    </ul>
  );
}

export default SocialIcons;
