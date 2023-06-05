import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const UnderSideBar = styled.div`
  min-width: 245px;
  height: 20px;
  @media only screen and (max-width: 1150px) {
    display: none;
  }
`;
const CardGridContainer = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 25px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .card-glow-effect {
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    background-color: var(--dark-100);
    :hover {
      .card-img {
        scale: 1.03;
        overflow: hidden;
      }
    }
  }
`;
const CardGridContainerTwo = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 25px;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export {
  FlexContainer,
  CardGridContainer,
  CardGridContainerTwo,
  UnderSideBar,
  FlexCol,
};
