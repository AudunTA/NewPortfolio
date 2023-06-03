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
              <Cards
                key={ele.id}
                id={ele.id}
                title={ele.title}
                desc={ele.shortDescription}
                src={ele.src}
              />
            );
          })}
        </CardGridContainerTwo>
      </ContentContainer>
    </WrapperContent>
  );
}

export default Projects;
