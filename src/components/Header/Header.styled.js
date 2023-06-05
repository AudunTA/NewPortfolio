import styled from "styled-components";

const SideBarContainer = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  background-color: var(--dark-100);
  border-right: 1px solid var(--border-color);
  transition: 1.15s;
  z-index: 99;

  flex-direction: column;
  justify-content: center;
  margin: auto;
  .nav-icon {
    color: var(--text-color-100);
    font-size: 17px;
    margin-right: 8px;
  }
  .navGroupHeader {
    margin: auto;
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

const LinkContainer = styled.div`
  margin: 24px 24px 5px 24px;
`;
const ExternalLink = styled.div``;
const AboutSection = styled.div`
  padding: 34px 24px 34px 24px;
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

const CenterWrapper = styled.div`
  margin: auto;
  padding-bottom: 20px;
`;
export {
  SideBarContainer,
  LinkContainer,
  ExternalLink,
  AboutSection,
  CenterWrapper,
};
