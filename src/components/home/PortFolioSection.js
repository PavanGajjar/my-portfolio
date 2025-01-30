import React from "react";
import "../../css/home/PortFolioSection.css";
import { Link } from "react-router-dom";


const PortFolioSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="home-hero-content">
          <div className="home-hero-left">
            <h1 className="home-hero-title animate-fade-in">
              Hello, I'm Pavan Gajjar
              <span className="home-hero-title-highlight animate-slide-in">
                Full Stack Developer,
              </span>
            </h1>
            <p className="home-hero-description animate-fade-in">
              Enthusiastic software engineer. Skilled in collaborative
              development and effective communication, with expertise in SAAS,
              SAAP, debugging and data structures. Proficient in Object Oriented
              Programming (OOP), cloud infrastructure, and CI/CD pipelines based
              software development.
            </p>
          </div>
          <div className="home-hero-right">
            {/* Hero image illustrating the service */}
            <img
              src={require("../../images/2T0A0074.jpg")}
              alt="Hotel"
              className="profile-img home-hero-image animate-slide-in"
            />
          </div>
        </div>
      </div>

      <div className="skills-section animate-fade-in">
        <div className="container">
          <div className="home-hero-buttons">
            <Link to="/resume">
              <button className="home-hero-button home-hero-button-primary animate-pop-in">
                Explore more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortFolioSection;
