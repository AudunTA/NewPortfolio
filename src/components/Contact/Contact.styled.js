import styled from "styled-components";
const ContactContent = styled.div`
  background-color: var(--dark-100);
  border-radius: 6px;

  .tilt-effect-project {
    overflow: hidden;
    border-radius: 6px;
    border: 1px solid var(--border-color);
    background-color: var(--dark-100);
  }
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
const ContentWrapper = styled.div`
  margin: 20px;
`;
export { ContentWrapper, ContactContent };
