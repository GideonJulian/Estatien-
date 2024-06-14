import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube, FaPaperPlane } from "react-icons/fa";
import { LuMailPlus } from "react-icons/lu";
import logoIcon from "../assets/fave.png";
import "../css/Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        {/* <div className="row-1">
          <div className="logo">
            <img src={logoIcon} alt="" />
            <h3>Estatein</h3>
          </div>
          <div className="inputBox">
            <span className="icon-1">
              <LuMailPlus />
            </span>
            <input type="text" placeholder="Enter Your Email"/>
            <span className="icon-2">
              <FaPaperPlane /> 
            </span>
          </div>
        </div>
        <div className="row-2">
          
        </div> */}
      </div>
      <div className="footer-bottom">
        <h3>@2023 Estatein. All Rights Reserved.</h3>
        <Link className="footer-terms">Terms & Conditions</Link>
        <div className="bottom-links">
          <Link className="bottom-socials">
            <FaFacebook />
          </Link>
          <Link className="bottom-socials">
            <FaLinkedin />
          </Link>
          <Link className="bottom-socials">
            <FaTwitter />
          </Link>
          <Link className="bottom-socials">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
