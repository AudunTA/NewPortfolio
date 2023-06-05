import React from "react";
import {
  ContentContainer,
  InfoContainer,
  WrapperContent,
  ButtonContainer,
} from "./Home.styled";
import {
  TextHeading,
  TextWhite,
  TextSubHeading,
} from "../../styles/Text.styles";
import { CardGridContainer } from "../../styles/Layout.styles";
import CasesOutlinedIcon from "@mui/icons-material/CasesOutlined";
import Cards from "../Cards";
import { PrimaryButton, IconButton } from "../../styles/Button.styles";

import { featuredData } from "../../data";

import backgroundPatterns from "../../assets/images/backgroundpatternsdark.png";
import { Link } from "react-router-dom";
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
      </ContentContainer>
    </WrapperContent>
  );
}

export default Home;
