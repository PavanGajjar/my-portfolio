import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa"; // Import WhatsApp from react-icons
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
          <Link to="/home">Portfolio</Link>
          <Link to="/resume">Resume</Link>
        </nav>

        <div className="footer-social">
          {/* Social media icons */}
          <a
            href="https://www.linkedin.com/in/pavan-gajjar/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/PavanGajjar"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a
            href="https://wa.me/15483981213"
            target="_blank"
            rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>

        {/* Contact details */}
        <div className="footer-contact">
          <a
            href="mailto:pavangajjar131298@gmail.com"
            className="footer-contact-link">
            pavangajjar131298@gmail.com
          </a>
          <a href="tel:+15483981213" className="footer-contact-link">
            +1 548 398 1213
          </a>
        </div>
    </footer>
  );
};

export default Footer;
