import React from "react";
import ReactDOM from "react-dom";

import { ContactContent, ContentWrapper } from "./Contact.styled";
import { WrapperContent, ContentContainer } from "../Home/Home.styled";
import { TextSkillsDark, TextSkillsWhite } from "../../styles/Text.styles";
import Tilt from "react-parallax-tilt";
//icons
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
function Contact() {
  return (
    <WrapperContent>
      <ContentContainer>
        <ContactContent>
          <Tilt
            tiltEnable={false}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="lightblue"
            glarePosition="all"
            className="tilt-effect-project"
          >
            <ContentWrapper>
              <div className="icon-container">
                <MailOutlineOutlinedIcon className="skills-icon" />
              </div>
              <div className="content-skills-card">
                <TextSkillsWhite>Contact</TextSkillsWhite>
                <TextSkillsDark>Please send me an email</TextSkillsDark>
              </div>
            </ContentWrapper>
          </Tilt>
        </ContactContent>
      </ContentContainer>
    </WrapperContent>
  );
}

export default Contact;
