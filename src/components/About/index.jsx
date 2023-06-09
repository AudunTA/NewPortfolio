import React from "react";
import { data } from "../../data";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Back } from "../Specific/Specific.styled";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import {
  WrapperContent,
  ContentContainer,
  InfoContainer,
} from "../Home/Home.styled";
import backgroundPatterns from "../../assets/images/backgroundpatternsdark.png";
import {
  TextHeading,
  TextWhite,
  DarkTextBig,
  TextSubHeading,
} from "../../styles/Text.styles";
import { ButtonContainer } from "../Home/Home.styled";
import { PrimaryButton, IconButton } from "../../styles/Button.styles";
import image from "../../assets/images/meg.jpg";
import { TextSkillsDark, TextSkillsWhite } from "../../styles/Text.styles";
import { SkillsCard, SkillsContainer } from "../Home/Home.styled";

//tilt effect
import Tilt from "react-parallax-tilt";

//icons

import { FaReact } from "react-icons/fa";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { SiStyledcomponents } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Education from "../Education";
//animate on scroll

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <WrapperContent>
      <img className="background-pattern" src={backgroundPatterns}></img>
      <ContentContainer>
        <Link to="/">
          <Back>
            <KeyboardBackspaceIcon className="back-icon" />
            <DarkTextBig>Back Home</DarkTextBig>
          </Back>
        </Link>
        <InfoContainer data-aos="fade-right">
          <TextHeading>About Me</TextHeading>
          <TextWhite className="short-paragraph-two">
            My Name is Audun Thompson Anderssen. Im 26 years old and as of june
            2023 I finished my front-end development studies at Noroff,
            Kristiansand. Im currently looking for a job. I have strong
            fundamentals in programming, and right now im working on learning
            more frameworks than React
          </TextWhite>
        </InfoContainer>
        <ButtonContainer>
          <a
            href="https://www.linkedin.com/in/audun-thompson-anderssen-79b3b3222/"
            target="_blank"
          >
            <IconButton className="btn_one" data-aos="fade-right">
              <LinkedInIcon className="btn-icon" />
              LinkedIn
            </IconButton>
          </a>
          <a href="https://github.com/AudunTA" target="_blank">
            <IconButton className="btn_two" data-aos="fade-left">
              <GitHubIcon className="btn-icon" />
              GitHub
            </IconButton>
          </a>
        </ButtonContainer>
        <div className="img-container-me" data-aos="fade">
          <img src={image} className="full-width-img" />
        </div>

        <TextSubHeading className="sub-heading">Education</TextSubHeading>

        <Education />
        <TextSubHeading className="sub-heading">
          My Strongest skills
        </TextSubHeading>
        <SkillsContainer>
          <Tilt
            perspective={1000}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="lightblue"
            glarePosition="all"
            className="tilt-effect"
          >
            <SkillsCard>
              <div className="icon-container">
                <FaReact className="skills-icon" />
              </div>
              <div className="content-skills-card">
                <TextSkillsWhite>React</TextSkillsWhite>
                <TextSkillsDark>
                  Framework I use to build applications.
                </TextSkillsDark>
              </div>
            </SkillsCard>
          </Tilt>
          <Tilt
            perspective={1000}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="lightblue"
            glarePosition="all"
            className="tilt-effect"
          >
            <SkillsCard>
              <div className="icon-container">
                <JavascriptIcon className="skills-icon-small" />
              </div>
              <div className="content-skills-card">
                <TextSkillsWhite>JavaScript</TextSkillsWhite>
                <TextSkillsDark>
                  My most comfortable programming language, im currently
                  learning TypeScript.
                </TextSkillsDark>
              </div>
            </SkillsCard>
          </Tilt>
          <Tilt
            perspective={1000}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="lightblue"
            glarePosition="all"
            className="tilt-effect"
          >
            <SkillsCard>
              <div className="icon-container">
                <SiStyledcomponents className="skills-icon" />
              </div>
              <div className="content-skills-card">
                <TextSkillsWhite>Styled components</TextSkillsWhite>
                <TextSkillsDark>
                  My most used styling library for React.
                </TextSkillsDark>
              </div>
            </SkillsCard>
          </Tilt>
          <Tilt
            perspective={1000}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="lightblue"
            glarePosition="all"
            className="tilt-effect"
          >
            <SkillsCard>
              <div className="icon-container">
                <FaFigma className="skills-icon" />
              </div>
              <div className="content-skills-card">
                <TextSkillsWhite>Figma</TextSkillsWhite>
                <TextSkillsDark>
                  Design tool i use to create and make prototypes of my
                  applications.
                </TextSkillsDark>
              </div>
            </SkillsCard>
          </Tilt>
          <Tilt
            perspective={1000}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="lightblue"
            glarePosition="all"
            className="tilt-effect"
          >
            <SkillsCard>
              <div className="icon-container">
                <SiMui className="skills-icon" />
              </div>
              <div className="content-skills-card">
                <TextSkillsWhite>MUI</TextSkillsWhite>
                <TextSkillsDark>
                  MUI provides simple and customizable React components.
                </TextSkillsDark>
              </div>
            </SkillsCard>
          </Tilt>
          <Tilt
            perspective={1000}
            scale={1.02}
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="lightblue"
            glarePosition="all"
            className="tilt-effect"
          >
            <SkillsCard>
              <div className="icon-container">
                <FaBootstrap className="skills-icon" />
              </div>
              <div className="content-skills-card">
                <TextSkillsWhite>BootStrap</TextSkillsWhite>
                <TextSkillsDark>
                  CSS framwork for easy and fast development
                </TextSkillsDark>
              </div>
            </SkillsCard>
          </Tilt>
        </SkillsContainer>
        <DarkTextBig className="margin-top">
          Additionally I also have experience in Python, SQL, Tailwind and for
          testing I use Unit test, jest and jsdocs for documentation.
        </DarkTextBig>
      </ContentContainer>
    </WrapperContent>
  );
}

export default About;
