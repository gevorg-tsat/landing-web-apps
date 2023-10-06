import React from "react";
import Logo from "../Assets/Logo.svg";
import { BsYoutube, BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsTelegram } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="footer-icons">
          <a href="https://t.me/gevorg_tsat">
            <BsTelegram />
          </a>
          <a href="https://youtu.be/y6120QOlsfU">
            <BsYoutube />
          </a>
          <a href="https://github.com/gevorg-tsat">
            <BsGithub />
          </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>8-800-555-55-55</span>
          <span>gstsaturyan@edu.hse.ru</span>
          {/* <span>press@food.com</span>
          <span>contact@food.com</span> */}
        </div>
        {/* <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
