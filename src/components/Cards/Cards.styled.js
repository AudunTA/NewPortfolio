import styled from "styled-components";

const Card = styled.div`
  .card-text {
    margin-top: 15px;
  }

  .card-img {
    width: 100%;
    max-height: 248px;
    object-fit: cover;
    border-radius: 6px;
    opacity: 1;
    transition: 0.15s;
    border: 1px solid var(--border-color);
    :hover {
      transition: 0.15s;
      opacity: 0.85;
    }
  }
  .link {
    text-decoration: none;
  }
`;
export { Card };
