import React from "react";
import ReactDOM from "react-dom";

import { ContactContent, ContentWrapper } from "./Contact.styled";
import { WrapperContent, ContentContainer } from "../Home/Home.styled";
import { TextSkillsDark, TextSkillsWhite } from "../../styles/Text.styles";
import Tilt from "react-parallax-tilt";
//icons
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { IconButton } from "../../styles/Button.styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
function Contact() {
  return (
    <WrapperContent>
      <ContentContainer>
        <ContactContent>
          <Tilt
            tiltEnable={false}
            glareEnable={false}
            className="tilt-effect-project"
          >
            <ContentWrapper>
              <div className="icon-container">
                <MailOutlineOutlinedIcon className="skills-icon" />
              </div>
              <div className="content-skills-card">
                <TextSkillsWhite>Contact</TextSkillsWhite>
                <TextSkillsDark>Email: aud-and2@online.no</TextSkillsDark>
                <TextSkillsDark>or send me a message on:</TextSkillsDark>
                <a
                  href="https://www.linkedin.com/in/audun-thompson-anderssen-79b3b3222/"
                  target="_Blank"
                >
                  <IconButton className="li-btn">
                    <LinkedInIcon className="btn-icon" />
                    <TextSkillsWhite>LinkedIn</TextSkillsWhite>
                  </IconButton>
                </a>
              </div>
            </ContentWrapper>
          </Tilt>
        </ContactContent>
      </ContentContainer>
    </WrapperContent>
  );
}

export default Contact;
