import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/scrollService";
import Animations from "../../utilities/Animations";
import "./Interest.css";
import Card from "react-animated-3d-card";
import { Icon } from "@iconify/react";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    console.log("HERE" + props);
    if(props === undefined) {return}
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div
      className="Interest-about-me-container Interest-screen-container Interest-fade-in"
      id={props.id || ""}
    >
      <div className="Interest-about-me-parent">
        <ScreenHeading title={"Interest"} subHeading={"what I Love To Do"} />

        <div className="Interest-about-me-card">
          <div className="Interest-about-me-details">
            <div className="Interest">
              <div className="InterestWrapper">
                <Card
                  style={{
                    backgroundColor: " #1f2235",
                    width: "150px",
                    height: "150px",
                    cursor: "pointer",
                    borderRadius: 25,
                  }}
                  // isStatic={true}
                  onClick={() => console.log("Card clicked")}
                >
                  <Icon className="InterestIcon" icon="mdi:language-java" />
                  <h1 className="InterestName" style={{ marginLeft: "32px" }}>
                    Coding
                  </h1>
                </Card>
              </div>
              <div className="InterestWrapper">
                <Card
                  style={{
                    backgroundColor: " #1f2235",
                    width: "150px",
                    height: "150px",
                    cursor: "pointer",
                    borderRadius: 25,
                  }}
                  onClick={() => console.log("Card clicked")}
                >
                  <Icon className="InterestIcon" icon="clarity:plane-solid" />
                  <h1 className="InterestName" style={{ marginLeft: "22px" }}>
                    Traveling
                  </h1>
                </Card>
              </div>
              <div className="InterestWrapper">
                <Card
                  style={{
                    backgroundColor: " #1f2235",
                    width: "150px",
                    height: "150px",
                    cursor: "pointer",
                    borderRadius: 25,
                  }}
                  onClick={() => console.log("Card clicked")}
                >
                  <Icon className="InterestIcon" icon="mdi:dance-ballroom" />
                  <h1 className="InterestName" style={{ marginLeft: "22px" }}>
                    Dancing
                  </h1>
                </Card>
              </div>
              <div className="InterestWrapper">
                <Card
                  style={{
                    backgroundColor: " #1f2235",
                    width: "150px",
                    height: "150px",
                    cursor: "pointer",
                    borderRadius: 25,
                  }}
                  onClick={() => console.log("Card clicked")}
                >
                  <Icon className="InterestIcon" icon="mdi:shopping-outline" />
                  <h1 className="InterestName" style={{ marginLeft: "22px" }}>
                    Shopping
                  </h1>
                </Card>
              </div>
              <div className="InterestWrapper">
                <Card
                  style={{
                    backgroundColor: " #1f2235",
                    width: "150px",
                    height: "150px",
                    cursor: "pointer",
                    borderRadius: 25,
                  }}
                  onClick={() => console.log("Card clicked")}
                >
                  <Icon className="InterestIcon" icon="mdi:chef-hat" />

                  <h1 className="InterestName" style={{ marginLeft: "30px" }}>
                    Cooking
                  </h1>
                </Card>
              </div>
              <div className="InterestWrapper">
                <Card
                  style={{
                    backgroundColor: " #1f2235",
                    width: "150px",
                    height: "150px",
                    cursor: "pointer",
                    borderRadius: 25,
                  }}
                  onClick={() => console.log("Card clicked")}
                >
                  <Icon className="InterestIcon" icon="ri:motorbike-fill" />

                  <h1 className="InterestName" style={{ marginLeft: "40px" }}>
                    Biking
                  </h1>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
