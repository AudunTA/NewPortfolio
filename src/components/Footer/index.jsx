import React from "react";
import { FooterContainer, GroupFooter } from "./Footer.styled";
import { FooterTextWhite, FooterTextDark } from "../../styles/Text.styles";
function Footer() {
  return (
    <FooterContainer>
      <GroupFooter>
        <FooterTextWhite>built in</FooterTextWhite>
        <FooterTextDark>React</FooterTextDark>
      </GroupFooter>
      <GroupFooter>
        <FooterTextWhite>made by</FooterTextWhite>
        <FooterTextDark>Audun T. Anderssen</FooterTextDark>
      </GroupFooter>
      <GroupFooter>
        <FooterTextWhite>©</FooterTextWhite>
        <FooterTextDark>2023</FooterTextDark>
      </GroupFooter>
    </FooterContainer>
  );
}

export default Footer;
