import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
const UnderSideBar = styled.div`
  min-width: 245px;
  height: 20px;
`;
const CardGridContainer = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 25px;
`;
const CardGridContainerTwo = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-gap: 25px;
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
