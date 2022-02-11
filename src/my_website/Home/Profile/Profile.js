import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import { Icon } from "@iconify/react";
export default function Profile() {
  return (
    <div className="main">
      <div className="profile-picture-container">
        <div className="profile-picture-parent">
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-details"></div>
          <div>
            <div className="mediadiv">
              <span className="mediaSpan">
                <div className="wrapper">
                  <div className="icon blog">
                    <div className="tooltip">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/goel-saksham/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fa fa-linkedin-square"></i>
                    </a>
                  </div>
                </div>

                <div className="wrapper">
                  <div className="icon blog">
                    <div className="tooltip">Github</div>
                    <a
                      href="https://github.com/SakshamGoel15"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fa fa-github-square"></i>
                    </a>
                  </div>
                </div>

                <div className="wrapper">
                  <div className="icon blog">
                    <div className="tooltip">Facebook</div>
                    <a
                      href="https://www.facebook.com/saksham.goel.35"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fa fa-facebook-square"></i>
                    </a>
                  </div>
                </div>

                <div className="wrapper">
                  <div className="icon blog">
                    <div className="tooltip">Instagram</div>
                    <a
                      href="https://www.instagram.com/sakshamgoel99/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>

                <div className="wrapper">
                  <div className="icon blog">
                    <div className="tooltip">Leetcode</div>
                    <a
                      href="https://leetcode.com/goelsaksham/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Icon className="leetcode" icon="simple-icons:leetcode" />
                    </a>
                  </div>
                </div>
              </span>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {" "}
                Namaste, I'm{" "}
                <span className="heighlighted text">Saksham Goel👨‍💻 </span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {" "}
                <h1>
                  {" "}
                  <Typical
                    loop={Infinity}
                    steps={[
                      "MERN stack Developer...",
                      2000,
                      "WordPress Developer...",
                      2000,
                      "React/React Native Developer...",
                      2000,
                      "Software Engineer...",
                      2000,
                    ]}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Actively seeking Summer 2022 Internship | MS in CS @University
                  of Florida
                </span>
              </span>
            </div>
            <div className="profile-options">
              <a
                href="Saksham_Goel_Resume.pdf"
                download="Saksham_Goel_Resume.pdf"
              >
                <button className="btn highlighted-btn"> Get Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
