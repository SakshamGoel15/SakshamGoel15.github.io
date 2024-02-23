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
              //icon={<Icon icon="bx:bxl-php" />}
              icon={
                <Icon icon="simple-icons:react" hFlip={true} vFlip={true} />
              }
            >
              <h4
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                University of Florida – Institute of Food and Agriculture
                Sciences (IFAS){" "}
              </h4>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "#1F2235" }}
              >
                <div className="Language">
                  <p>Software Developer </p>
                  <p>
                    {" "}
                    Tech: React.js, PHP, HTML, CSS,JavaScript, WordPress, JSON,
                    JQuery{" "}
                  </p>
                </div>
              </h5>
              <p>
                <ul>
                  <li>
                    Implemented a conference room booking and color-coded
                    calendar using React.js, HTML, CSS, and JavaScript
                    effectively optimizing event management and resource
                    utilization.
                  </li>
                  <li>
                    Increased user engagement by 15% across 67 IFAS event pages
                    by introducing ’Event Stories’ through WordPress multisite
                    integration.
                  </li>
                  <li>
                    Implemented a text-to-speech plugin for IFAS blogs using
                    React.js, significantly enhancing user interaction by 10%.
                  </li>
                  <li>
                    Built a Chrome extension using React, reducing website
                    cleanup efforts by 50% and enhancing overall user
                    experience.
                  </li>
                  <li>
                    Implemented Shibboleth Authentication and integrated Google
                    Analytics for UF/IFAS Branding Site. Enabled user
                    identification, improved website performance analysis, and
                    tracked user behavior for data-driven enhancements and
                    better user experience.
                  </li>
                  <li>
                    Maintained and debugged the IFAS website, achieving a 20%
                    performance boost by optimizing the file upload module using
                    JavaScript. Additionally, SEO enhancements led to a 20%
                    increase in organic search traffic.
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "#1f2235", color: '#fff' }}
              date="June 2019 — January 2021"
              iconStyle={{ background: "#b5651d", color: "#fff" }}
              icon={
                <Icon icon="simple-icons:react" hFlip={true} vFlip={true} />
              }
            >
              <h4
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                Artistixe IT Solutions, India
              </h4>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "#1F2235" }}
              >
                <div className="Language">
                  <p>Software Developer</p>
                  <p>
                    {" "}
                    Tech: React.js, PHP, HTML, CSS,JavaScript, Redux, HTML, CSS,
                    REST-API, MongoDB
                  </p>
                </div>
              </h5>
              <p>
                <ul>
                  <li>
                    Collaborated with cross-functional teams to translate
                    requirements into effective technical solutions.
                  </li>
                  <li>
                    Developed and maintained applications using React.js, HTML,
                    CSS, and JavaScript. Implemented 23 reusable components,
                    facilitated 14 REST API interactions, and designed 9 diverse
                    form validation controls.
                  </li>
                  <li>
                    Utilized Redux for efficient state management, TypeScript
                    for code quality, and integrated Bootstrap and jQuery to
                    enhance design and functionality, resulting in a 15%
                    improvement in user interface responsiveness.
                  </li>
                  <li>
                    Optimized the MySQL database structure to enhance
                    performance, implementing 7 indexing strategies, 12 query
                    optimizations, andapplying advanced database normalization
                    techniques. This led to a 30% improvement in response times,
                    efficient data retrieval, andenhanced overall system
                    scalability for seamless and high-performing applications.
                  </li>
                  <li>
                    Implemented responsive design and utilized AJAX/JSON for
                    efficient front-end to back-end data exchange.
                  </li>
                </ul>
              </p>
              {/* <p>
                <Cerficatebutton img="https://drive.google.com/file/d/1Q3DyV2UPI40KgQGhNLAfL9cpBEV6FdpU/view?usp=sharing" />
              </p> */}
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
                Fastor, India
              </h4>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "#1F2235" }}
              >
                <div className="Language">
                  <p> Mobile Developer Intern </p>
                  <p>
                    Tech: React-Native, Redux, JavaScript, CSS, GraphQL,
                    REST-API{" "}
                  </p>
                </div>
              </h5>
              <p>
                <ul>
                  <li>
                    Developed a Contactless Dining App with barcode-enabled menu
                    access and seamless backend order processing.
                  </li>
                  <li>
                    Used agile methodologies and coded features to track user
                    orders which improved food delivery efficiency by 30%.
                  </li>
                  <li>
                    Implemented tracking updates for the order which increased
                    customer satisfaction by 50%.
                  </li>
                  <li>
                    Enhanced the system by introducing a feature that sends
                    notifications 5 minutes prior to the order being ready.{" "}
                  </li>
                </ul>
              </p>
              {/* <p>
                <Cerficatebutton img="https://drive.google.com/file/d/1nexfHPPylXIiUk-Eu-EKaR5PyeIaKPs6/view?usp=sharing" />
              </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // contentStyle={{ background: "#1f2235", color: '#fff' }}
              //  date="May 2020 - June 2020"
              iconStyle={{ background: "#b5651d", color: "#fff" }}
              icon={
                <Icon icon="simple-icons:react" hFlip={true} vFlip={true} />
              }
            >
              <h4
                className="vertical-timeline-element-title"
                style={{ color: "#1F2235" }}
              >
                Sanjog Ethnic
              </h4>
              <h5
                className="vertical-timeline-element-subtitle"
                style={{ color: "#1F2235" }}
              >
                <div className="Language">
                  <p> Web Developer </p>
                  <p>
                    Tech: React.js, Redux, HTML, CSS, JavaScript, Express,
                    MongoDB{" "}
                  </p>
                </div>
              </h5>
              <p>
                <ul>
                  <li>Spearheaded the design and development of a full-fledged e-commerce website from concept to implementation, leading to a 30% increase in user engagement and a 25% boost in conversion rates. Emphasized intuitive user interfaces, seamless navigation, and a secure shopping experience for enhanced customer satisfaction.
                  </li>
                <li>
                Implemented robust features such as product catalogs, secure payment gateways, and dynamic search functionalities, Resulting in a 25% improvement in online sales and a 15% increase in customer satisfaction, adhering to industry best practices in e-commerce website development.
                </li>
                </ul>
              </p>
              {/* <p>
                <Cerficatebutton img="https://drive.google.com/file/d/1nexfHPPylXIiUk-Eu-EKaR5PyeIaKPs6/view?usp=sharing" />
              </p> */}
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
