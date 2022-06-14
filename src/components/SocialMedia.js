import React from "react";
import {
  
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";


function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://www.facebook.com/adddlreyes143"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillFacebook className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://twitter.com/addisonD3reyes?t=W68nW_mihSz2me233_8ZOQ&s=09"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiOutlineTwitter className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.instagram.com/addi_son17/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:addisondelosreyes111@yahoo.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;
