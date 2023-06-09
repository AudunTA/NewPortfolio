import styled from "styled-components";

const NavText = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: var(--text-color-100);
  line-height: 20px;
  font-family: interRegular;
  text-decoration: none;
`;
const NavTextWhite = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: var(--almost-white);
  line-height: 15px;
  font-family: interRegular;
  text-decoration: none;
`;
const NavSmallText = styled.p`
  font-size: 10px;
  font-weight: 400;
  color: var(--text-color-100);
  line-height: 20px;
  font-family: interRegular;
  text-transform: uppercase;
  margin-left: 12px;
  cursor: default;
`;
const TextHeading = styled.h1`
  font-family: interBold;
  font-size: 48px;
  font-weight: 600;
  color: var(--almost-white);
  @media (max-width: 800px) {
    font-size: 30px;
  }
`;
const TextSubHeading = styled.h1`
  font-family: interBold;
  font-size: 20px;
  font-weight: 600;
  color: var(--almost-white);
`;
const TextWhite = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: var(--almost-white);
  line-height: 20px;
  font-family: interRegular;
  text-decoration: none;
`;
const TextWhiteBig = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--almost-white);
  line-height: 20px;
  font-family: interRegular;
  text-decoration: none;
`;
const DarkTextBig = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: var(--text-color-100);
  line-height: 25px;
  font-family: interRegular;
  text-decoration: none;
`;
const FooterTextDark = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-color-100);
  line-height: 24px;
  font-family: interRegular;
  text-decoration: none;
  margin-left: 5px;
`;
const FooterTextWhite = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--almost-white);
  line-height: 24px;
  font-family: interRegular;
  text-decoration: none;
`;

const TextSkillsWhite = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--almost-white);
  line-height: 24px;
  font-family: interRegular;
  text-decoration: none;
`;
const TextSkillsDark = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-color-100);
  line-height: 24px;
  font-family: interRegular;
  text-decoration: none;
`;
export {
  NavText,
  NavSmallText,
  NavTextWhite,
  TextHeading,
  TextWhite,
  TextWhiteBig,
  DarkTextBig,
  TextSubHeading,
  FooterTextWhite,
  FooterTextDark,
  TextSkillsWhite,
  TextSkillsDark,
};
