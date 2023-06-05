import React from "react";
//style
import {
  SideBarContainer,
  LinkContainer,
  ExternalLink,
  AboutSection,
  CenterWrapper,
} from "./Header.styled";
//icons
import { WorkOutline } from "@mui/icons-material";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { NavText, NavSmallText, NavTextWhite } from "../../styles/Text.styles";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import image from "../../assets/images/meg.jpg";
const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  margin: auto;
`;
function Header() {
  return (
    <>
      <SideBarContainer>
        <CenterWrapper>
          <AboutSection>
            <img id="img_avatar" src={image}></img>
            <div className="group-info">
              <NavTextWhite>Audun T. Anderssen</NavTextWhite>
              <NavText>Front-end Developer</NavText>
            </div>
          </AboutSection>
          <StyledNavLink
            to="/"
            activeclassname="active"
            className="navGroupHeader"
          >
            <ExploreOutlinedIcon className="nav-icon" />
            <NavText>Home</NavText>
          </StyledNavLink>
          <StyledNavLink
            to="/Projects"
            activeclassname="active"
            className="navGroupHeader"
          >
            <WorkOutline className="nav-icon" />
            <NavText>Projects</NavText>
          </StyledNavLink>
          <StyledNavLink
            to="/About"
            activeclassname="active"
            className="navGroupHeader"
          >
            <InfoOutlinedIcon className="nav-icon" />
            <NavText>About</NavText>
          </StyledNavLink>
          <StyledNavLink
            to="/Contact"
            activeclassname="active"
            className="navGroupHeader"
          >
            <MailOutlineOutlinedIcon className="nav-icon" />
            <NavText>Contact</NavText>
          </StyledNavLink>
          <LinkContainer>
            <NavSmallText>check out</NavSmallText>
          </LinkContainer>
          <a
            href="https://www.linkedin.com/in/audun-thompson-anderssen-79b3b3222/"
            target="_blank"
          >
            <ExternalLink className="navGroupHeader">
              <LinkedInIcon className="nav-icon" />
              <NavText>LinkedIn</NavText>
            </ExternalLink>
          </a>
          <a href="https://github.com/AudunTA" target="_blank">
            <ExternalLink className="navGroupHeader">
              <GitHubIcon className="nav-icon" />
              <NavText>GitHub</NavText>
            </ExternalLink>
          </a>
        </CenterWrapper>
      </SideBarContainer>
    </>
  );
}

export default Header;
