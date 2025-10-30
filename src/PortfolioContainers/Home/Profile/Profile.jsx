import "./Profile.css";
import { TypeAnimation } from "react-type-animation";
import Resume from "../../../assets/Utkasrh_Resume.pdf";
import React from "react";
import ScrollService from "../../../utilities/ScrollService";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a
                href="https://www.linkedin.com/in/utkarsh-raghuvanshi-46b11720a/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/UtkarshRaghuvansh1" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.instagram.com/raghuvanshi_utkarsh30/"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://leetcode.com/u/utkarshRagh3003/" target="_blank">
                <i className="fa-solid fa-code"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Utkarsh</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <TypeAnimation
                  sequence={[
                    "Frontend Developer 💻",
                    1500,
                    "React Developer 🔴",
                    1500,
                    "Web Enthusiast 🌐",
                    1500,
                    "Fullstack Developer",
                    1500,
                    "Tech Consultant 💁🏽",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Crafting modern web apps with performance & precision
            </span>
          </div>

          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              {" "}
              Hire Me{" "}
            </button>
            <a href={Resume} download="UtkarshResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
