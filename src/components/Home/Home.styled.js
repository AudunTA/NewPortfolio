import styled from "styled-components";
const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .background-pattern {
    position: absolute;
    max-width: 1250px;
    width: 100%;

    object-fit: cover;
    opacity: 0.3;
    z-index: 1;
  }
  a {
    text-decoration: none;
  }
  .background-pattern-bright {
    position: absolute;
    max-width: 1250px;
    width: 100%;

    object-fit: cover;
    opacity: 0.2;
    z-index: 1;
  }
  .project-image {
    margin-top: 50px;
    width: 100%;
    object-fit: cover;
    border-radius: 6px;
    opacity: 1;
    transition: 0.15s;
    border: 1px solid var(--border-color);
  }
`;
const ContentContainer = styled.div`
  margin-top: 150px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 750px;
  z-index: 2;
  .sub-heading {
    padding-top: 50px;
    padding-bottom: 15px;
  }
  .short-paragraph {
    margin-top: 15px;
    padding-bottom: 15px;
    max-width: 480px;
  }
  .short-paragraph-two {
    margin-top: 15px;
    padding-bottom: 15px;
  }
  .long-description {
    margin-top: 50px;
    margin-bottom: 50px;
    font-weight: 400;
    font-size: 18px;
  }
  .full-width-img {
    max-width: 300px;
    border: 1px solid var(--border-color);
    border-radius: 6px;
    object-fit: cover;
    margin-top: 50px;
  }
  .margin-top {
    margin-top: 15px;
  }
`;
const InfoContainer = styled.div`
  margin-bottom: 15px;
`;
const ButtonContainer = styled.div`
  display: flex;

  .btn_two {
    margin-left: 15px;
  }
  .btn_one {
  }
`;

const SkillsContainer = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  min-height: 100px;
  grid-gap: 25px;
  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .tilt-effect {
    overflow: hidden;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    background-color: var(--dark-100);
  }
`;

const SkillsCard = styled.div`
  margin: 20px;
  .icon-container {
    width: 36px;
    height: 36px;
    border-radius: 67%;
    border: 1px solid var(--border-color-skills);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .skills-icon {
    color: var(--color-purple);
    font-size: 20px;
    object-fit: cover;
  }
  .skills-icon-small {
    color: var(--color-purple);
    font-size: 30px;
    object-fit: cover;
  }
  .content-skills-card {
    margin-top: 10px;
  }
`;
export {
  ContentContainer,
  InfoContainer,
  WrapperContent,
  ButtonContainer,
  SkillsContainer,
  SkillsCard,
};
