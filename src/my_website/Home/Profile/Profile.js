import React, {useState} from "react";
import Typical from "react-typical";
 
import "./Profile.css";
import { Icon } from "@iconify/react";
export default function Profile() {
  const [uniqueTypicalKey, setUniqueTypicalKey] = useState(0);
  const handleTypicalKeyChange = () => {
    setUniqueTypicalKey((prevKey) => prevKey + 1);
  };
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
                      <Icon className="Social_media" icon="simple-icons:linkedin" />
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
                      <Icon className="Social_media" icon="simple-icons:github" />

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
                      <Icon className="Social_media" icon="simple-icons:facebook" />

                    </a>
                  </div>
                </div>

                <div className="wrapper">
                  <div className="icon blog">
                    <div className="tooltip">Instagram</div>
                    <a
                      href="https://www.instagram.com/goelsaksham99/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                     <Icon className="Social_media" icon="simple-icons:instagram" />
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
                      <Icon className="Social_media" icon="simple-icons:leetcode" />
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
                    key={uniqueTypicalKey}
                    loop={Infinity}
                    steps={[
                      "React/React Native Developer...",
                      3000,
                      "MERN stack Developer...",
                      3000,
                      "WordPress Developer...",
                      3000,
                      "Software Engineer...",
                      3000,
                      "UI/UX Designer...",
                      3000,
                    ]}
                    onLoop={() => handleTypicalKeyChange()}
                  />
                </h1>
                <span className="profile-role-tagline">
                  Actively seeking For Software Developer Role | Software Developer @University
                  of Florida.
                </span>
              </span>
            </div>
            <div className="profile-options">
              <a
                href="https://drive.google.com/file/d/1Wzq8vDOJdxBvlPhWOK3kGmoi8ionxXSz/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
               //download="Saksham_Goel_Resume.pdf"
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
