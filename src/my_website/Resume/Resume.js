import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
import ModalIndex from "../../components/ModalIndex";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if(props === undefined) {return}
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""} || {props.CGPA ? props.CGPA : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + " ~ " + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <i class="fa fa-file-certificate"></i>
        {/* <ModalIndex img={props.certificate} /> */}
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    // { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Technologies Skills", logoSrc: "projects.svg" },
    { label: "Database Skills", logoSrc: "interests.svg" },
    { label: "Developer Tools", logoSrc: "interests.svg" },
    { label: "Methodologies and OS", logoSrc: "interests.svg" }
    
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 77 },
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "Typescript", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "Python", ratingPercentage: 65 },
    { skill: "PHP", ratingPercentage: 85 },
    { skill: "SQL", ratingPercentage: 90 },
    { skill: "C/C++", ratingPercentage: 80 },
    { skill: "F#", ratingPercentage: 80 },
    
      
  ];
  const technologiesSkillsDetails = [
    { skill: "React JS", ratingPercentage: 90 },
    { skill: "React Native", ratingPercentage: 90 },
    { skill: "Redux", ratingPercentage: 85 },
    { skill: "GraphQL", ratingPercentage: 90 },
    { skill: "WordPress", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 80 },
    { skill: "WordPress", ratingPercentage: 90 },
    { skill: "JSON", ratingPercentage: 90 },
    { skill: "jQuery", ratingPercentage: 90 },
    { skill: "AWS", ratingPercentage: 90 },
    { skill: "XML", ratingPercentage: 90 },
    { skill: "AJAX", ratingPercentage: 90 },
  ];
  const databaseSkillsDetails = [
    { skill: "MYSQL", ratingPercentage: 70 },
    { skill: "MongoDb", ratingPercentage: 70 },
    { skill: "Firebase", ratingPercentage: 85 },
    { skill: "Oracle", ratingPercentage: 85 },
  ];
  const DeveloperToolsSkillsDetails = [
    { skill: "Postman", ratingPercentage: 70 },
    { skill: "Git", ratingPercentage: 70 },
    { skill: "Figma", ratingPercentage: 85 },
    { skill: "Adobe Illustrator", ratingPercentage: 85 },
    { skill: "Visual Studio Code", ratingPercentage: 95 },

  ];
  const MethodologyAndOSSkillsDetails = [
    { skill: "Agile", ratingPercentage: 70 },
    { skill: "Waterfall", ratingPercentage: 70 },
    { skill: "scrum", ratingPercentage: 85 },
    { skill: "SDLC", ratingPercentage: 85 },
    { skill: "Windows/MacOS/Linux", ratingPercentage: 95 },

  ];
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Florida, USA"}
        subHeading={"MASTER'S OF COMPUTER SCIENCE"}
        fromDate={"May 2021"}
        toDate={"Dec 2022"}
       // certificate={"EXPECTED.jpg"}
        CGPA={"3.86/4"}
      />

      <ResumeHeading
        heading={"University of Florida, USA"}
        subHeading={"SENIOR CERTIFICATE IN COMPUTER SCIENCE"}
        fromDate={"Jan 2021"}
        toDate={"May 2021"}
        //certificate={"certificateImg.jpg"}
        CGPA={"3.75/4"}
      />
      <ResumeHeading
        heading={"JUIT, India"}
        subHeading={"BACHELOR OF COMPUTER SCIENCE & ENGINEERING"}
        fromDate={"July 2017"}
        toDate={"May 2021"}
        //certificate={"BachlorsDegree.jpg"}
        CGPA={"8.3/10"}
      />
    </div>,

    /* WORK EXPERIENCE */
    // <div className="resume-screen-container" key="work-experience">
    //   <div className="experience-container">
    //     <ResumeHeading
    //       heading={"Ehizeex Technoloy"}
    //       subHeading={"FULL STACK DEVELOPER INTERN"}
    //       fromDate={"2021"}
    //       toDate={"Present"}
    //     />
    //     <div className="experience-description">
    //       <span className="resume-description-text">
    //         Currently working as MERN stack web and mobile developer and also an
    //         online instructor on udemy.
    //       </span>
    //     </div>
    //     <div className="experience-description">
    //       <span className="resume-description-text">
    //         - Developed an ecommerce website for client with the dashboard for
    //         managing the products, managing reviews, users, payment etc. .
    //       </span>
    //       <br />
    //       <span className="resume-description-text">
    //         - Integrated the web app with backend services to create new user
    //         onboarding application with dynamic form content.{" "}
    //       </span>
    //       <br />
    //       <span className="resume-description-text">
    //         - I stretch my mental capacity to develope UI as per the given
    //         designs.
    //       </span>
    //       <br />
    //     </div>
    //   </div>
    // </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* Technologies SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {technologiesSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* DATABASE SKILLS */
    <div
      className="resume-screen-container programming-skills-container-database"
      key="programming-skills"
    >
      {databaseSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* Developer Tools */
    <div
      className="resume-screen-container programming-skills-container-database"
      key="programming-skills"
    >
      {DeveloperToolsSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

        /* Methodologies and OS Skills */
        <div
        className="resume-screen-container programming-skills-container"
        key="programming-skills"
      >
        {MethodologyAndOSSkillsDetails.map((skill, index) => (
          <div className="skill-parent" key={index}>
            <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        ))}
      </div>,

    /* PROJECTS */
    // <div className="resume-screen-container" key="projects">
    //   {projectsDetails.map((projectsDetails, index) => (
    //     <ResumeHeading
    //       key={index}
    //       heading={projectsDetails.title}
    //       subHeading={projectsDetails.subHeading}
    //       description={projectsDetails.description}
    //       fromDate={projectsDetails.duration.fromDate}
    //       toDate={projectsDetails.duration.toDate}
    //     />
    //   ))}
    // </div>,

    /* Interests */
    // <div className="resume-screen-container" key="interests">
    //   <ResumeHeading
    //     heading="Teaching"
    //     description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
    //   />
    //   <ResumeHeading
    //     heading="Music"
    //     description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
    //   />
    //   <ResumeHeading
    //     heading="Competitive Gaming"
    //     description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
    //   />
    // </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
     
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

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
        <ScreenHeading
          title={"Education & Skills"}
          subHeading={"My formal Bio Details"}
        />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
