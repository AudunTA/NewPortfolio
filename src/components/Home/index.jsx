import React from "react";
import {
  ContentContainer,
  InfoContainer,
  WrapperContent,
  ButtonContainer,
  SkillsContainer,
  SkillsCard,
} from "./Home.styled";
import {
  TextHeading,
  TextWhite,
  TextSubHeading,
  TextSkillsWhite,
  TextSkillsDark,
} from "../../styles/Text.styles";
import { CardGridContainer } from "../../styles/Layout.styles";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import Cards from "../Cards";
import { PrimaryButton, IconButton } from "../../styles/Button.styles";

import { featuredData } from "../../data";

import backgroundPatterns from "../../assets/images/backgroundpatternsdark.png";
import { Link } from "react-router-dom";

//tilt effect
import Tilt from "react-parallax-tilt";

//icons
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { SiStyledcomponents } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiMui } from "react-icons/si";

import { useState } from "react";
import FeatureCard from "../FeatureCard";
//animate on scroll

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <WrapperContent>
      <img className="background-pattern" src={backgroundPatterns}></img>
      <ContentContainer>
        <InfoContainer>
          <TextHeading data-aos="fade-down">Hey, I'm Audun.</TextHeading>
          <TextHeading data-aos="fade-right">
            Im a front-end developer.
          </TextHeading>
          <TextWhite className="short-paragraph" data-aos="fade-right">
            Welcome to my portfolio! Here you can view my most recent projects
            and get to know me.
          </TextWhite>
        </InfoContainer>
        <ButtonContainer>
          <Link to="/About">
            <PrimaryButton data-aos="fade-right">About me</PrimaryButton>
          </Link>
          <Link to="/Projects">
            <IconButton className="btn_two" data-aos="fade-left">
              <CasesOutlinedIcon className="btn-icon" />
              All projects
            </IconButton>
          </Link>
        </ButtonContainer>
        <TextSubHeading className="sub-heading">Featured work</TextSubHeading>
        <Link to="/Specific/1" sx={{ textDecoration: "none" }}>
          <FeatureCard />
        </Link>

        <TextSubHeading className="sub-heading">Skills</TextSubHeading>
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
            <SkillsCard data-aos="fade-down">
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
            <SkillsCard data-aos="fade-down">
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
            <SkillsCard data-aos="fade-down">
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
            <SkillsCard data-aos="fade-down">
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
            <SkillsCard data-aos="fade-down">
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
            <SkillsCard data-aos="fade-down">
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
      </ContentContainer>
    </WrapperContent>
  );
}

export default Home;
