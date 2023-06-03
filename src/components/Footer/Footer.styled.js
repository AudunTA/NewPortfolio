import styled from "styled-components";

const FooterContainer = styled.footer`
  border-top: 1px solid var(--border-color);

  height: 88px;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GroupFooter = styled.div`
  margin: 25px;
  display: flex;
  align-items: center;
`;

export { FooterContainer, GroupFooter };
