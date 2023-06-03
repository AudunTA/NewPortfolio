import styled from "styled-components";

const SideBarContainer = styled.div`
  position: fixed;
  background-color: var(--dark-100);
  border-right: 1px solid var(--border-color);
  height: 100vh;
  transition: 1.15s;
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
export {
  SideBarContainer,
  NavItemGroup,
  LinkContainer,
  ExternalLink,
  AboutSection,
};
