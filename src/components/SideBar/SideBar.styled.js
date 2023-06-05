import styled from "styled-components";
const Page = styled.div`
  transition: 0.3s;
  .mn-show {
    display: none;
  }
  .bg-show {
    @media only screen and (min-width: 1150px) {
      display: none;
    }
  }
  .bg-hidden {
    display: none;
  }
  .show {
    transition: 0.3s;
    margin-left: 250px;
    @media only screen and (min-width: 1150px) {
      transition: 0ms;
      margin-left: 0;
    }
  }
  .hidden {
    transition: 0.3s;
    margin-left: 0px;
  }
`;
const SideBarContainer = styled.div`
  @media only screen and (max-width: 1150px) {
    left: -260px;
    margin-left: 0;
  }
  @media only screen and (min-width: 1150px) {
  }
  position: fixed;
  background-color: var(--dark-100);
  border-right: 1px solid var(--border-color);
  height: 100vh;
  transition: 0.3s;
  z-index: 99;

  .nav-icon {
    color: var(--text-color-100);
    font-size: 17px;
    margin-right: 8px;
  }
  .navGroup {
    display: flex;
    align-items: center;
    width: 170px;
    padding: 8px 12px;
    border-radius: 6px;
    margin: 5px 24px 5px 24px;
    :hover {
      .nav-icon {
        transition: 0.15s;
        color: var(--almost-white);
      }
      p {
        transition: 0.15s;
        color: var(--almost-white);
      }
    }
  }
  .active {
    border: 1px solid var(--border-color);
    p {
      color: var(--almost-white);
    }
    background-color: var(--dark-highlight);
    .nav-icon {
      color: var(--almost-white);
    }
  }
  a {
    text-decoration: none;
  }
`;
const NavItemGroup = styled.div`
  .nav-icon {
    color: var(--text-color-100);
    font-size: 17px;
    margin-right: 8px;
  }
  .navGroup {
    display: flex;
    align-items: center;
    width: 170px;
    padding: 8px 12px;
    border-radius: 6px;
    margin: 5px 24px 5px 24px;
    :hover {
      .nav-icon {
        transition: 0.15s;
        color: var(--almost-white);
      }
      p {
        transition: 0.15s;
        color: var(--almost-white);
      }
    }
  }
`;

const LinkContainer = styled.div`
  margin: 24px 24px 5px 24px;
`;
const ExternalLink = styled.div``;
const AboutSection = styled.div`
  margin: 34px 24px 34px 24px;
  display: flex;
  align-items: center;
  #img_avatar {
    width: 40px;
    height: 40px;
    border-radius: 67%;
  }
  .group-info {
    margin-left: 10px;
  }
`;
const MenuToggle = styled.div`
  @media only screen and (min-width: 1150px) {
    display: none;
  }
  position: relative;
  display: flex;
  align-items: center;
  background-color: var(--dark-100);
  border-right: 1px solid var(--border-color);
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  right: -59px;
  .menu-icon {
    color: var(--almost-white);
    padding: 5px;
  }
`;

const BackGroundFade = styled.div`
  position: fixed;
  transition: 0.2s;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
  z-index: 4;
`;
export {
  SideBarContainer,
  NavItemGroup,
  LinkContainer,
  ExternalLink,
  AboutSection,
  MenuToggle,
  Page,
  BackGroundFade,
};
