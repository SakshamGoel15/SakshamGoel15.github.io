import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";
// import Card from "react-animated-3d-card";
// import { Icon } from "@iconify/react";
import Aboutme from "../../assets/AboutMe/Aboutme.png";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    // console.log("HERE" + props);
    if (props === undefined) {
      return;
    }
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = {
    description1:
      "Hey, It’s nice to see you here! I am a software developer who loves to transform ideas into reality using programming skills. My approach combines creativity, strategy, design, and technology to create highly-accessible applications. I like to work with people of different mindsets. I took up engineering because of my passion for innovation. I want to challenge the real-life problems, ideate solutions for them and convert my solutions into reality.",
    description2:
      "I am currently working as a software developer at the University of Florida and have also completed my master's degree in Computer Science from the same university. Throughout my academic journey, I have explored various programming languages, frameworks, and databases, fueling my passion for technology and motivating me to delve deeper into the field.",
    description3: "If you're curious about my story, click on the biography .",
    // "Full stack web and mobile developer with background knowledge of MERN stacks with redux, along with a knack of building applications with utmost efficiency. Strong professional with a BSC willing to be an asset for an organization.",

    highlights: {
      bullets: [
        // "HEGHLIGHTS HERE",
        // "Full Stack web and mobile development",
        // "Interactive Front End as per the design",
        // "React and React Native",
        // "Redux for State Mnanagement",
        // "Building REST API",
        // "Managing database",
      ],
      // heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTSANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />

        <div className="about-me-card">
          {/* <div className="about-me-profile"></div> */}
          <div className="about-me-details">
            <div className="About-me-wrapper">
              <div className="About-me-part-2">
                {/* <div className ="About-me-first"> */}
                <div className="about-me-profile-img"></div>

                {/* </div> */}

                <div className="About-me-second">
                  <div className="about-me-options">
                    <button
                      className="btn highlighted-btn highlighted-btn1"
                      onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                    >
                      {" "}
                      Contact Me{" "}
                    </button>
                    <a
                      href="https://drive.google.com/file/d/1wVbpQ1h6jYNPD2b9Fa5FrKG6eTUoLdKc/view?usp=drive_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button
                        className="btn highlighted-btn highlighted-btn2"
                        // onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                      >
                        {" "}
                        Biography{" "}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="About-me-part-1">
                <div className="About-me-first">
                  {SCREEN_CONSTSANTS.description1}
                  <br />
                  {SCREEN_CONSTSANTS.description2}
                  <br />
                  <hr />
                  {SCREEN_CONSTSANTS.description3}
                </div>
              </div>
            </div>
            <span className="about-me-description"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
