import React, { useState } from "react";
// import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";
import imgBack from "../../../src/images/Mail2.jpg";
// import load1 from "../../../src/images/load.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";
import Footer from "../../my_website/Footer/Footer";
import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (props === undefined) {
      return;
    }
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  console.log(name);
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(
        `https://goelgatorportfolio.herokuapp.com/contact`,
        data
      );
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="END-main">
      <div className="main-container fade-in" id={props.id || ""}>
        <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
        <div className="central-form">
          <div className="col">
            <h2 className="title">Get In Touch !!</h2>{" "}
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
            <div>
              <span className="callMe">Phone: +1 (352)-870-7130</span>
            </div>
            <div>
              <a
                style={{ textDecoration: "none" }}
                href="mailto:goel.saksham99@gmail.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="callMe">Email: sakshamgoel1503@gmail.com</span>
              </a>
            </div>
            <div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a
                style={{ textDecoration: "none" }}
                href="mailto:goelsaksham@ufl.edu"
                target="_blank"
                rel="noreferrer noopener"
              >
                <span className="callMe">: goelsaksham@ufl.edu </span>
              </a>
            </div>
          </div>
          <div className="back-form">
            <div className="img-back">
              <img src={imgBack} alt="not found" />
            </div>

            <form onSubmit={submitForm}>
              <p>{banner}</p>
              <h4>Send Your Email Here!</h4>
              <label htmlFor="name">Name</label>
              <input type="text" onChange={handleName} value={name} />

              <label htmlFor="email">Email</label>
              <input type="email" onChange={handleEmail} value={email} />

              <label htmlFor="message">Message</label>
              <textarea type="text" onChange={handleMessage} value={message} />

              <div className="send-btn">
                <button type="submit">
                  Send
                  {bool ? (
                    <b className="load">
                      {/* <img src={load1} alt="not responding" /> */}
                    </b>
                  ) : (
                    ""
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="ScrollUp">
        <Footer />
      </div>
      <div className="endfooter">
        <div className="Line1">
          <Icon className="Developer" icon="ic:round-developer-mode" />
          <h1 className="buildBy">Build And Developed By Saksham Goel</h1>
        </div>
        <h1 className="buildBy">Contact: +1(352)-870-7130</h1>
        <h1 className="buildBy">
          <a
            style={{ textDecoration: "none" }}
            title={"Email"}
            href="mailto:goel.saksham99@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            {/* <span className="callMe2">Email: goel.saksham99@gmail.com</span> */}
          </a>
        </h1>
      </div>
    </div>
  );
}
