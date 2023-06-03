import styled from "styled-components";

const PrimaryButton = styled.button`
  padding: 12px 24px;
  font-family: interBold;
  font-size: 15px;
  border-radius: 6px;
  color: var(--almost-black);
  border: 1px solid var(--border-color);
  cursor: pointer;
  background-color: var(--btn-primary-color);

  :hover {
    transition: 0.15s;
    opacity: 0.9;
  }
`;
const IconButton = styled.button`
  padding: 12px 24px;
  display: flex;
  align-items: center;
  font-family: interBold;
  font-size: 15px;
  border-radius: 6px;
  color: var(--almost-white);
  border: 1px solid var(--border-color);
  cursor: pointer;
  background-color: var(--dark-300);
  :hover {
    transition: 0.15s;
    opacity: 0.9;
  }
  .btn-icon {
    color: var(--almost-white);
    margin-right: 5px;
    font-size: 18px;
  }
`;
export { PrimaryButton, IconButton };
