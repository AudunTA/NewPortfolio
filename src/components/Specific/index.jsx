import React from "react";
import { data } from "../../data";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Back, IconsContainer, IconCard } from "./Specific.styled";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
import {
  WrapperContent,
  ContentContainer,
  InfoContainer,
} from "../Home/Home.styled";
import IconsHandling from "../IconsHandling";
import backgroundPatterns from "../../assets/images/backgroundpatternsdark.png";
import {
  TextHeading,
  TextWhite,
  DarkTextBig,
  TextSubHeading,
} from "../../styles/Text.styles";
import { ButtonContainer } from "../Home/Home.styled";
import { PrimaryButton, IconButton } from "../../styles/Button.styles";
import GitHubIcon from "@mui/icons-material/GitHub";
//icons
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";

function Specific() {
  let params = useParams();
  const [object, setObject] = useState();
  useEffect(() => {
    data.forEach((ele) => {
      if (ele.id === Number(params.id)) {
        setObject(ele);
      }
    });
  }, [params.id]);

  const logObject = () => {
    console.log(object);
  };

  return object ? (
    <WrapperContent>
      <img className="background-pattern" src={backgroundPatterns}></img>
      <ContentContainer>
        <Link to="/">
          <Back>
            <KeyboardBackspaceIcon className="back-icon" />
            <DarkTextBig>All projects</DarkTextBig>
          </Back>
        </Link>
        <InfoContainer>
          <TextHeading>{object.title}</TextHeading>
        </InfoContainer>
        <ButtonContainer>
          <PrimaryButton>Live Link</PrimaryButton>
          <IconButton className="btn_two">
            <GitHubIcon className="btn-icon" />
            GitHub repository
          </IconButton>
        </ButtonContainer>
        <img className="project-image" src={object.src} />

        <DarkTextBig className="long-description">
          {object.longDescription}
        </DarkTextBig>
        <TextSubHeading className="sub-heading">Built with</TextSubHeading>
        <IconsContainer>
          {object.techStack.map((ele) => {
            switch (ele.name) {
              case "react":
                return (
                  <IconCard>
                    <FaReact className="icon" />
                    <TextWhite>React</TextWhite>
                  </IconCard>
                );
              case "javaScript":
                return (
                  <IconCard>
                    <IoLogoJavascript className="icon" />
                    <TextWhite>JavaScript</TextWhite>
                  </IconCard>
                );
              case "html":
                return (
                  <IconCard>
                    <FaHtml5 className="icon" />
                    <TextWhite>HTML</TextWhite>
                  </IconCard>
                );
              case "css":
                return (
                  <IconCard>
                    <FaCss3Alt className="icon" />
                    <TextWhite>CSS</TextWhite>
                  </IconCard>
                );
              case "bootstrap":
                return (
                  <IconCard>
                    <FaBootstrap className="icon" />
                    <TextWhite>Bootstrap</TextWhite>
                  </IconCard>
                );
            }
          })}
        </IconsContainer>
      </ContentContainer>
    </WrapperContent>
  ) : (
    ""
  );
}

export default Specific;
