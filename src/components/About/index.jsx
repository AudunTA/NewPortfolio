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

//icons
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function About() {
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
        <InfoContainer>
          <TextHeading>About Me</TextHeading>
          <TextWhite className="short-paragraph-two">
            My Name is Audun Thompson Anderssen. Im 26 years old and as of june
            2023 I finished my front-end development studies at Noroff,
            Kristiansand. Im currently looking for a job.
          </TextWhite>
        </InfoContainer>
        <ButtonContainer>
          <a
            href="https://www.linkedin.com/in/audun-thompson-anderssen-79b3b3222/"
            target="_blank"
          >
            <IconButton className="btn_one">
              <LinkedInIcon className="btn-icon" />
              LinkedIn
            </IconButton>
          </a>
          <a href="https://github.com/AudunTA" target="_blank">
            <IconButton className="btn_two">
              <GitHubIcon className="btn-icon" />
              GitHub
            </IconButton>
          </a>
        </ButtonContainer>
        <img src={image} className="full-width-img" />
        <TextSubHeading className="sub-heading">Education</TextSubHeading>
        <DarkTextBig>
          Bachelor IT and informationssystems at USN, Ringeriket.
        </DarkTextBig>
        <DarkTextBig>
          2 years higher degree Front-end development at Noroff, Kristiansand.
        </DarkTextBig>
      </ContentContainer>
    </WrapperContent>
  );
}

export default About;
