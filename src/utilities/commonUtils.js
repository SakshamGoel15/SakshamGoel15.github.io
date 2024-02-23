import Home from "../my_website/Home/Home";
import AboutMe from "../my_website/AboutMe/AboutMe";
import Education from "../my_website/Resume/Resume";
import Certificate from "../my_website/Testimonial/Testimonial";
import ContactMe from "../my_website/ContactMe/ContactMe";
import Project from "../my_website/Project/Project";
import Experience from "../my_website/Experience/Experience";
import Interest from "../my_website/Interest/Interest";
// import { faCertificate } from "@fortawesome/free-solid-svg-icons";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    Component: Home,
  },
  {
    screen_name: "About Me",
    Component: AboutMe,
  },
  {
    screen_name: "Education",
    Component: Education,
  },
  {
    screen_name: "Experience",
    Component: Experience,
  },
  {
    screen_name: "Project",
    Component: Project,
  },
  {
    screen_name: "Certificate",
    Component: Certificate,
  },
  {
    screen_name: "Interest",
    Component: Interest,
  },
  {
    screen_name: "Contact Me",
    Component: ContactMe,
  },
];

export const GET_SCREEN_INDEX = (screen_name) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
