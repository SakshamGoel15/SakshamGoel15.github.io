import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon } from "@iconify/react";
import "./project.css";

const Resume = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (props === undefined) {
      return;
    }
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Projects"} subHeading={"What I Develop"} />
        {/* <div className="resume-card"> */}
        {/* <div className="resume-bullets"> */}
        <div className="bullet-container">
          <VerticalTimeline
            animate={true}
            className="VerticalTimeline"
            layout={"1-column-left"}
            lineColor={" #1f2235"}
            //   #b5651d"}
            //   #1f2235
            //   "}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "#b5651d", color: '#fff' }}
              // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="January 2022 - Current"
              iconStyle={{ background: "#b5651d", color: "#fff" }}
              icon={<Icon icon="simple-icons:react" />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                Customer Support{" "}
              </h3>
              <div className="Language">
                <p>
                  Node.js, React.js, Redux, javascript, Express, MongoDB,
                  HTML/CSS{" "}
                </p>
              </div>

              <p>
                <ul>
                  <li>
                    Developing the website which provides the knowledge about
                    the companies.
                  </li>
                  <li>
                    The application supports users for getting reviews about
                    various companies and helps users with complaints and
                    claims.
                  </li>
                </ul>
              </p>

              <div className="lprofile-options">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/SakshamGoel15/Customer_Service/tree/master"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn highlighted-btn">Source Code</button>
                </a>
                {/* <a style={{ textDecoration: "none" }} href="/">
                  <button className="btn highlighted-btn">Demo</button>
                </a> */}
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "#b5651d", color: '#fff' }}
              // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="Octoper 2021 - December 2021"
              iconStyle={{ background: "#b5651d", color: "#fff" }}
              icon={<Icon icon="bx:bxl-php" />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                TEXT-TO-SPEECH{" "}
              </h3>
              <div className="Language">
                <p>wordpress, php, HTML/CSS </p>
              </div>

              <p>
                <ul>
                  <li>
                    Developed a WordPress plugin which easily turns the text
                    Blog into an Audio Blog by using responsive voice API.
                  </li>
                  <li>
                    This plugin increases the user’s engagement who have issues
                    on reading, focusing, suffering from weak eyesight etc. Also
                    helps in doing multi-tasking in this modern lifestyle.
                  </li>
                </ul>
              </p>

              <div className="lprofile-options">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/SakshamGoel15/My-Blog-Audio"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn highlighted-btn">Source Code</button>
                </a>
                {/* <a style={{ textDecoration: "none" }} href="/">
                  <button className="btn highlighted-btn">Demo</button>
                </a> */}
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "#1f2235", color: '#fff' }}
              date="January 2021 - April 2021"
              iconStyle={{ background: "#b5651d", color: "#fff" }}
              icon={
                <Icon icon="file-icons:codekit" hFlip={true} vFlip={true} />
              }
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                TWITTER CLONE
              </h3>
              <div className="Language">
                <p>
                  F#, Akka.net, Actor Model, Distributed Programming, Postman
                </p>
              </div>

              <p>
                <ul>
                  <li>
                    Implemented a twitter like engine using the Actor model of
                    Akka.net framework using the concepts of distributed
                    programming.
                  </li>
                  <li>
                    Functionalities such as user login/logout, tweet and retweet
                    were created where the users were actors sending random
                    tweet and simulations were run for the same.
                  </li>
                </ul>
              </p>
              <div className="lprofile-options">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/SakshamGoel15/Twitter-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn highlighted-btn">Source Code</button>
                </a>
                <a
                  style={{ textDecoration: "none" }}
                  href="https://www.youtube.com/watch?v=Ahkzcqf5DDM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn highlighted-btn">Demo</button>
                </a>
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "#1f2235", color: '#fff' }}
              date="January 2021 - April 2021"
              iconStyle={{ background: "#b5651d", color: "#fff" }}
              icon={
                <Icon icon="simple-icons:react" hFlip={true} vFlip={true} />
              }
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                SAFETY TRIP
              </h3>
              <div className="Language">
                <p>React.js, Redux, Express, MySql, Postman</p>
              </div>

              <p>
                <ul>
                  <li>
                    Worked on developing a website which suggests the safest
                    route instead of the shortest road.
                  </li>
                  <li>
                    Performed multiple complex queries on the database of 4
                    million tuples to analyze the trends in traffic accidents.
                  </li>
                  <li>
                    The idea nudges the users toward choosing routes which are
                    safter rather than faster.
                  </li>
                </ul>
              </p>
              <div className="lprofile-options">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/SakshamGoel15/Safety-trip"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn highlighted-btn">Source Code</button>
                </a>
                {/* <a style={{ textDecoration: "none" }} href="/">
                  <button className="btn highlighted-btn">Demo</button>
                </a> */}
              </div>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "#1f2235", color: '#fff' }}
              date="2010 - 2011"
              iconStyle={{ background: "#b5651d", color: "#fff" }}
               icon= {
                <Icon icon="simple-icons:react" hFlip={true} vFlip={true} />
              }
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                COVID-19 cases Stats India
              </h3>
              <div className="Language">
                <p>wordpress, php, HTML/CSS </p>
              </div>

              <p>
                Creative Direction, User Experience, Visual Design, SEO, Online
                Marketing
              </p>
              <div className="lprofile-options">
                <a style={{ textDecoration: "none" }} href="/">
                  <button className="btn highlighted-btn">Source Code</button>
                </a>
                <a style={{ textDecoration: "none" }} href="/">
                  <button className="btn highlighted-btn">Demo</button>
                </a>
              </div>
            </VerticalTimelineElement> */}

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="January 2021 - April 2021"
              iconStyle={{ background: "#b5651d", color: "#fff" }}
              icon={<Icon icon="mdi:language-java" />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                B+ Tree
              </h3>
              <div className="Language">
                <p>C++</p>
              </div>
              <p>
                <ul>
                  <li>
                    Implemented and tested a small degree memory resident B+
                    tree used for internal memory dictionaries.
                  </li>
                  <li>
                    The implementation involved initialization, Insertion,
                    Deletion and Search within range of input keys of tree.
                  </li>
                </ul>
              </p>
              <div className="lprofile-options">
                <a
                  style={{ textDecoration: "none" }}
                  href="https://github.com/SakshamGoel15/B_tree/tree/master"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn highlighted-btn">Source Code</button>
                </a>
                {/* <a style={{ textDecoration: "none" }} href="/">
                  <button className="btn highlighted-btn">Demo</button>
                </a> */}
              </div>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              date="January 2021 - April 2021"
              iconStyle={{ background: "#b5651d", color: "#fff" }}
              icon={<Icon icon="mdi:language-java" />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                P2P File Sharing
              </h3>
              <div className="Language">
                <p>Java </p>
              </div>
              <p>
                <ul>
                  <li>
                    Implemented a Bit-torrent by using TCP/IP Protocols and
                    handshaking algorithm for file management operations between
                    peers using Java.
                  </li>
                  <li>
                    Including special message types for choking and non-choking
                    to increase the download speed across computers by 50%.
                  </li>
                </ul>
              </p>
              <div className="lprofile-options">
                <a style={{ textDecoration: "none" }} href="https://github.com/SakshamGoel15/P2P-file-sharing/tree/master"      target="_blank"
                  rel="noreferrer">
                  <button className="btn highlighted-btn">Source Code</button>
                </a>
                {/* <a style={{ textDecoration: "none" }} href="/">
                  <button className="btn highlighted-btn">Demo</button>
                </a> */}
              </div>
            </VerticalTimelineElement>
          </VerticalTimeline>
          {/* <div className="bullet-icons"></div> */}
        </div>
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Resume;
