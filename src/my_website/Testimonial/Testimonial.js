import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";
import hongkong from "../../../src/img/Testimonial/The Hong Kong University of Science and Technology.png"
import udemy from "../../../src/img/Testimonial/UdemyIcon.png";
import Cerficatebutton from "../../components/Certificate button/Certificatebutton";

export default function Testimonial(props) {
 
    
           
    // The rest of the code
  
  let fadeInScreenHandler = (screen) => {
    if(props === undefined) {return}
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="testimonial-section fade-in" id={props.id || ""}>
      <div className="CertiHeading" style={{}}>
        <ScreenHeading title={"CERTIFICATIONS"} subHeading={"What I Learn"} />
      </div>

      <section>
        {/* <div className="container"> */}
        <div className="CertificateRow">
          {/* <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            > */}

          <div className="CertificateWrapper">
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                <div className="cert" >
                <div className="logo">
                  <img src={hongkong} alt="no internet connection"></img>
                  </div>
                <div className="client-info">
                  
                  <h5>React.js</h5>
                  <p>Issued: JULY 2020</p>
                  
                  <p><Cerficatebutton img="https://www.coursera.org/account/accomplishments/records/ZBEU55LFJ3MR" /></p>
                </div>
                </div>
                <div className="para">
                  <p>
                    <i className="fa fa-quote-left" />
                    After this course, I get familiar with client-side Javascript application development and the React library. Now, I am able to implement single page applications in React,   use various React features including components and forms, implement a functional front-end web application using React,  use Reactstrap for designing responsive React applications and use Redux to design the architecture for a React-Redux application

                    <i className="fa fa-quote-right" />
                  </p>
                  </div>
                </div>

               
                
              </div>
            </div>
          </div>
          <div className="CertificateWrapper">
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                <div className="cert" >
                <div className="logo">
                <img src={udemy} alt="no internet connection"></img></div>
                <div className="client-info">
                  
                  <h5>UI/UX</h5>
                  <p>Issued: JULY 2020</p>
                  
                  <p style={{fontSize: 10}}><Cerficatebutton img="http://ude.my/UC-0069e3c7-354c-4177-8599-5556a3d28fa2" /></p>
                  
                  
                </div>
                </div>
                <div className="para">
                  <p>
                    <i className="fa fa-quote-left" />
                    After this course, I get familiar with all the techniques of UI/UX designer on Adobe XD software. I learned how to build & test a full website design and full mobile app. Now, I am able to prototype the designs with interactions, create quick wireframes, send the designs for feedback & commenting, use of premade UI kits, export production ready assets, and know about fonts, colors, workflow tricks & shortcuts.

                    <i className="fa fa-quote-right" />
                  </p>
                  </div>
                </div>

               
                
              </div>
            </div>
          </div>
          <div className="CertificateWrapper">
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                <div className="cert" >
                <div className="logo">
                <img src={udemy} alt="no internet connection"></img></div>
                <div className="client-info">
                  
                <h5>Graphql</h5>
                  <p>Issued: May 2020</p>
                  
                  <p><Cerficatebutton img="http://ude.my/UC-c0b35ee3-a330-40dd-9c69-598a8bf94afc"/></p>
                </div>
                </div>
                <div className="para">
                  <p>
                    <i className="fa fa-quote-left" />
                    After this course I get familiar with the applications which is built in React JS and GraphQL. I learned about the fundamental concepts behind structuring GraphQL servers, the power of building flexible data schemas and to know about the differences between Apollo and Relay.

                    <i className="fa fa-quote-right" />
                  </p>
                  </div>
                </div>

               
                
              </div>
            </div>
          </div>
          <div className="CertificateWrapper">
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                <div className="cert" >
                <div className="logo">
                <img src={hongkong} alt="no internet connection"></img></div>
                <div className="client-info">
                  
                <h5>React Native</h5>
                <p>Issued: APRIL 2020</p>
                  <p><Cerficatebutton img="https://www.coursera.org/account/accomplishments/records/R3J58RSURV94" /></p>
                </div>
                </div>
                <div className="para">
                <p>
                    <i className="fa fa-quote-left" />
                    After this course I get familiar with the  real-world native apps using React Native
                    and learned about the reusable components, different designs and animation of mobile application, terminology & concepts of Redux, prototype & deploy the applications on the Apple and Google Play Stores.
                    <i className="fa fa-quote-right" />
                  </p>
                </div>
                </div>
              </div>
            </div>
          </div>
          {/* </OwlCarousel> */}
        </div>
        {/* </div> */}
      </section>
    </div>
  );
}
