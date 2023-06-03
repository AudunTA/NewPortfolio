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
  .background-pattern-bright {
    position: absolute;
    max-width: 1250px;
    width: 100%;

    object-fit: cover;
    opacity: 0.2;
    z-index: 1;
  }
  .project-image {
    width: 100%;
    min-height: 220px;
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
    padding-bottom: 15px;
  }
  .short-paragraph {
    margin-top: 15px;
    padding-bottom: 15px;
    max-width: 480px;
  }
  .long-description {
    margin-top: 50px;
    margin-bottom: 50px;
    font-weight: 400;
    font-size: 18px;
  }
`;
const InfoContainer = styled.div`
  margin-bottom: 15px;
`;
const ButtonContainer = styled.div`
  display: flex;
  margin-bottom: 50px;
  .btn_two {
    margin-left: 15px;
  }
`;

export { ContentContainer, InfoContainer, WrapperContent, ButtonContainer };
