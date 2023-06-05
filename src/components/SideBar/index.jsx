import React from "react";
//style
import {
  SideBarContainer,
  NavItemGroup,
  LinkContainer,
  ExternalLink,
  AboutSection,
  MenuToggle,
} from "./SideBar.styled";
//icons
import MenuIcon from "@mui/icons-material/Menu";
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
`;
function SideBar() {
  const handleShowMenu = () => {
    console.log("Test");
  };
  return (
    <>
      <SideBarContainer>
        <AboutSection>
          <img id="img_avatar" src={image}></img>
          <div className="group-info">
            <NavTextWhite>Audun T. Anderssen</NavTextWhite>
            <NavText>Front-end Developer</NavText>
          </div>
          <MenuToggle onClick={handleShowMenu}>
            <MenuIcon className="menu-icon" />
          </MenuToggle>
        </AboutSection>
        <StyledNavLink to="/" activeclassname="active" className="navGroup">
          <ExploreOutlinedIcon className="nav-icon" />
          <NavText>Home</NavText>
        </StyledNavLink>
        <StyledNavLink
          to="/Projects"
          activeclassname="active"
          className="navGroup"
        >
          <WorkOutline className="nav-icon" />
          <NavText>Projects</NavText>
        </StyledNavLink>
        <StyledNavLink
          to="/About"
          activeclassname="active"
          className="navGroup"
        >
          <InfoOutlinedIcon className="nav-icon" />
          <NavText>About</NavText>
        </StyledNavLink>
        <StyledNavLink
          to="/Contact"
          activeclassname="active"
          className="navGroup"
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
          <ExternalLink className="navGroup">
            <LinkedInIcon className="nav-icon" />
            <NavText>LinkedIn</NavText>
          </ExternalLink>
        </a>
        <a href="https://github.com/AudunTA" target="_blank">
          <ExternalLink className="navGroup">
            <GitHubIcon className="nav-icon" />
            <NavText>GitHub</NavText>
          </ExternalLink>
        </a>
      </SideBarContainer>
    </>
  );
}

export default SideBar;
