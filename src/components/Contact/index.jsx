import React from "react";
import ReactDOM from "react-dom";
import Tilt from "react-parallax-tilt";
import { TestCard } from "./Contact.styled";
function Contact() {
  return (
    <TestCard>
      <Tilt
        tiltEnable={false}
        glareEnable={true}
        glareMaxOpacity={0.9}
        glareColor="lightblue"
        glarePosition="all"
        className="tilt-effect"
      ></Tilt>
    </TestCard>
  );
}

export default Contact;
