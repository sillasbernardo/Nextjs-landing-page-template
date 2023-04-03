import React from "react";

import "./About.scss";
import Image from "../../../Assets/Img/Homepage/About/img0.png";
import { MobileViewContext } from "../../Context/MobileViewContext";
import AboutPerson from "./AboutPerson";

const About = React.forwardRef((props, ref) => {
  const isMobile = React.useContext(MobileViewContext);

  return (
    <div ref={ref} className="about-container">
      {!isMobile && <AboutPerson Image={Image} />}
      <div className="about-description">
        <span className="about-desc-title">
          About <span className="about-desc-title-bold">us</span>
        </span>
        {isMobile && <AboutPerson Image={Image} />}
        <p className="description-text">
          Welcome to our company! We specialize in event organization and
          planning, with a focus on creating unforgettable experiences for our
          clients. Our team has extensive experience in organizing a wide range
          of events, from intimate family gatherings to large weddings and
          corporate events. We believe that every event is unique, and we work
          closely with our clients to ensure that their vision is brought to
          life. Our mission is to provide exceptional service and attention to
          detail, creating events that are both seamless and unforgettable. Let
          us help you celebrate your special moments and create memories that
          will last a lifetime!
        </p>
      </div>
    </div>
  );
});

export default About;
