import React from 'react'
import Img from '../Images/Logo_png.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";


import './style.css';

const Header = () => {
  return (
    <div className ="Header">
      <header>
      <div className="social-container">
        <img  src={Img} width="7%"/>
     
<a href="https://www.linkedin.com"
  className="linkedin social">
  <FontAwesomeIcon icon={faLinkedin} size="3x" />
</a>
<a href="https://www.facebook.com"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="3x" />
</a>
<a href="https://www.instagram.com"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="3x" />
</a>
</div>
      </header>

    </div>
  );
}

export default Header;