import React from "react";
import {
  EducationContainer,
  EductationContent,
  ContentWrapper,
} from "./Education.styled";
import {
  TextSkillsDark,
  TextSkillsWhite,
  TextSubHeading,
} from "../../styles/Text.styles";
import { MdSchool } from "react-icons/md";
import Tilt from "react-parallax-tilt";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Education() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <EducationContainer>
      <Tilt
        tiltEnable={false}
        scale={1.02}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="lightblue"
        glarePosition="all"
        className="tilt-effect-project"
        data-aos="fade-down"
      >
        <EductationContent data-aos="fade-left">
          <ContentWrapper>
            <div className="icon-container">
              <MdSchool className="skills-icon" />
            </div>
            <div className="content-skills-card">
              <TextSkillsWhite>2017-2020</TextSkillsWhite>
              <TextSkillsDark>
                Bachelor IT and informationssystems at USN, Ringerike.
              </TextSkillsDark>
            </div>
          </ContentWrapper>
        </EductationContent>
      </Tilt>
      <Tilt
        tiltEnable={false}
        scale={1.02}
        glareEnable={true}
        glareMaxOpacity={0.2}
        glareColor="lightblue"
        glarePosition="all"
        className="tilt-effect-project"
      >
        <EductationContent data-aos="fade-right">
          <ContentWrapper>
            <div className="icon-container">
              <MdSchool className="skills-icon" />
            </div>
            <div className="content-skills-card">
              <TextSkillsWhite>2021-2023</TextSkillsWhite>
              <TextSkillsDark>
                2 years higher degree Front-end development at Noroff,
                Kristiansand.
              </TextSkillsDark>
            </div>
          </ContentWrapper>
        </EductationContent>
      </Tilt>
    </EducationContainer>
  );
}

export default Education;
