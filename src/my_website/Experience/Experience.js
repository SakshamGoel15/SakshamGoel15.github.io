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
import Cerficatebutton from "../../components/Certificate button/Certificatebutton";

const Resume = (props) => {
  // console.log("Resume" + props);
  let fadeInScreenHandler = (screen) => {
    if(props === undefined) {return}
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
        <ScreenHeading title={" Experience"} subHeading={"My Work Adventure"} />
        <div className="bullet-container">
          <VerticalTimeline
            animate={true}
            className="VerticalTimeline"
            layout={"1-column-left"}
            lineColor={" #1f2235"}
          >
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "#b5651d", color: '#fff' }}
              // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="December 2021 - Current"
              iconStyle={{
                background: "#b5651d",
                color: "#fff",
                fontSize: "40px",
              }}
              icon={<Icon icon="bx:bxl-php" />}
            >
              <h4
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                WEB DEVELOPER || UF/IFAS{" "}
              </h4>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "#1F2235" }}
              >
                 <div className="Language">
                  <p>Student Assistant || Gainesville, FL (USA) </p>
                <p>Tech: PHP, Javascript, Wordpress, HTML/CSS </p>
              </div>
                
              </h5>
              <p>
              <ul>
                  <li>Developing and maintaining the website of the UF/IFAS.</li>
                  <li>Enhance website’s engagement by introducing event feature on the website.</li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "#1f2235", color: '#fff' }}
              date="July 2020 - Auguest 2020"
              iconStyle={{ background: "#b5651d", color: "#fff" }}
              icon={<Icon icon="mdi:web" hFlip={true} vFlip={true} />}
            >
              <h4
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                WEB DEVELOPER  || INTERNSHALA 
              </h4>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "#1F2235" }}
              >
                 <div className="Language">
                
                <p>Training || Remote, (INDIA)</p>
                <p>  Tech: PHP, MySql, Bootstrap, HTML/CSS </p>
              </div>

                
              </h5>
              <p>
                <ul>
                  <li>Learned to develop a website by using PHP, MySql, Bootstrap, HTML and CSS.</li>
                  <li>Developed an e-commerce website to display information about mobile phones.</li>
                </ul>
              </p>
              <p><Cerficatebutton img="https://drive.google.com/file/d/1Q3DyV2UPI40KgQGhNLAfL9cpBEV6FdpU/view?usp=sharing" /></p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "#1f2235", color: '#fff' }}
              date="May 2020 - June 2020"
              iconStyle={{ background: "#b5651d", color: "#fff" }}
              icon={
                <Icon icon="simple-icons:react" hFlip={true} vFlip={true} />
              }
            >
              <h4
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                MOBILE APPLICATION DEVELOPER || FASTOR 
              </h4>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "#1F2235" }}
              >
                
                <div className="Language">
                  <p>Intern || New Delhi, (INDIA) </p>
                <p>Tech: React-Native, Redux, javascript, GraphQL, HTML/CSS </p>
              </div>
              </h5>
              <p><ul>
                <li>Worked with the Mobile App development team for developing the front-end side of the application.</li>
                <li>The application helps users to order food online from food courts and get notified when the food is ready. This saves user’s time and effort to stand in queue and wait for orders and avoid crowds during covid times. </li>
                </ul></p>
                <p><Cerficatebutton img="https://drive.google.com/file/d/1nexfHPPylXIiUk-Eu-EKaR5PyeIaKPs6/view?usp=sharing" /></p>
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
