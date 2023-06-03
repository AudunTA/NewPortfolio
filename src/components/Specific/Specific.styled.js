import styled from "styled-components";

const Back = styled.div`
  position: absolute;
  top: 100px;
  display: flex;
  align-items: center;
  .back-icon {
    color: var(--text-color-100);
    font-size: 18px;
    margin-right: 10px;
  }
  margin-bottom: 40px;
  cursor: pointer;
  transition: 0.15s;
  :hover {
    .back-icon {
      transition: 0.15s;
      color: var(--almost-white);
    }
    p {
      transition: 0.15s;
      color: var(--almost-white);
      margin-left: 3px;
    }
  }
`;

const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const IconCard = styled.div`
  height: 100%;
  padding: 15px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: var(--dark-100);
  border: 1px solid var(--border-color);
  .icon {
    color: var(--almost-white);
    width: 50px;
    height: 50px;
  }
  p {
    margin-top: 5px;
  }
`;
export { Back, IconsContainer, IconCard };
