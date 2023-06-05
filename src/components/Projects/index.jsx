import React from "react";
import {
  WrapperContent,
  ContentContainer,
  InfoContainer,
} from "../Home/Home.styled";
import { TextHeading, TextWhite } from "../../styles/Text.styles";
import { CardGridContainerTwo } from "../../styles/Layout.styles";
import Cards from "../Cards";
import { data } from "../../data";
import backgroundPatterns from "../../assets/images/backgroundpatterns.png";
//tilt effect
import Tilt from "react-parallax-tilt";

function Projects() {
  return (
    <WrapperContent>
      <img className="background-pattern-bright" src={backgroundPatterns}></img>
      <ContentContainer>
        <InfoContainer>
          <TextHeading>Projects</TextHeading>
          <TextWhite className="short-paragraph">
            Here is a list of my most recent projects, some of my other projects
            the api's are no longer working. Feel free to check them out on my
            github.
          </TextWhite>
        </InfoContainer>
        <CardGridContainerTwo>
          {data.map((ele) => {
            return (
              <Tilt
                key={ele.id}
                tiltEnable={false}
                scale={1.02}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="lightblue"
                glarePosition="all"
                className="tilt-effect-project"
              >
                <Cards
                  key={ele.id}
                  id={ele.id}
                  title={ele.title}
                  desc={ele.shortDescription}
                  src={ele.src}
                />
              </Tilt>
            );
          })}
        </CardGridContainerTwo>
      </ContentContainer>
    </WrapperContent>
  );
}

export default Projects;
