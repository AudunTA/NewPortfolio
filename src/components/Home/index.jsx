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

import { FaReact } from "react-icons/fa";
import JavascriptIcon from "@mui/icons-material/Javascript";
function Home() {
  return (
    <WrapperContent>
      <img className="background-pattern" src={backgroundPatterns}></img>
      <ContentContainer>
        <InfoContainer>
          <TextHeading>Hey, I'm Audun.</TextHeading>
          <TextHeading>Im a front-end developer.</TextHeading>
          <TextWhite className="short-paragraph">
            Welcome to my portfolio! Here you can view my most recent projects
            and get to know me.
          </TextWhite>
        </InfoContainer>
        <ButtonContainer>
          <Link to="/About">
            <PrimaryButton>About me</PrimaryButton>
          </Link>
          <Link to="/Projects">
            <IconButton className="btn_two">
              <CasesOutlinedIcon className="btn-icon" />
              All projects
            </IconButton>
          </Link>
        </ButtonContainer>
        <TextSubHeading className="sub-heading">Featured work</TextSubHeading>
        <CardGridContainer>
          {featuredData.map((ele) => {
            return (
              <Cards
                key={ele.id}
                id={ele.id}
                title={ele.title}
                desc={ele.shortDescription}
                src={ele.src}
              ></Cards>
            );
          })}
        </CardGridContainer>
        <SkillsContainer>
          <Tilt
            tiltEnable={false}
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
                  Framework I use to build applications
                </TextSkillsDark>
              </div>
            </SkillsCard>
          </Tilt>
          <Tilt
            tiltEnable={false}
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
                  learning TypeScript
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
