import React from 'react';
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWhatsapp
  } from "@fortawesome/free-brands-svg-icons";

const Footer = () =>{
    return (
        <div className="footer">
     <div className={"back"}>
     <FontAwesomeIcon icon={faWhatsapp} size="3x" />
     </div>
     <div className={"continue"} >
         <h2>+91 6377469765</h2></div>
         </div>
        
    )
}
export default Footer;