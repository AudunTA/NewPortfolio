import styled from "styled-components";

const FooterContainer = styled.footer`
  border-top: 1px solid var(--border-color);

  height: 88px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 500px) {
    padding-top: 10px;
    flex-direction: column;
    height: auto;
  }
`;

const GroupFooter = styled.div`
  margin: 25px;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 1150px) {
    margin: 10px;
  }
`;

export { FooterContainer, GroupFooter };
