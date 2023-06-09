import styled from "styled-components";

const FeatureCardContainer = styled.div`
  a {
    text-decoration: none;
  }

  padding: 15px;

  border-radius: 6px;
  border: 1px solid var(--border-color);
  background-color: var(--dark-100);

  position: relative;

  border-radius: 6px;
  p {
    font-family: NL;
    color: #97a0b2;
  }
  .background-container {
    z-index: 2;
  }
  .background-container-two {
  }
  .grid-pattern {
    object-fit: cover;
    overflow: hidden;

    position: absolute;
    z-index: 1;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }
`;

const MockContainer = styled.div`
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.07);
  }

  background-color: #fff;
  border-radius: 6px;

  .mock-outline {
    @media (max-width: 800px) {
      display: none;
    }
    border: 1px solid var(--border-color);
    border-radius: 6px;
    width: 100%;
    height: 360px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }

    overflow-x: hidden;
    .mock-header {
      width: 100%;
      height: 15px;
      margin-top: 2px;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      display: flex;
      justify-content: center;

      .content-header {
        width: 100%;
        max-width: 450px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .group-logo {
        display: flex;
        align-items: center;
        p {
          margin-left: 3px;
          font-family: NL;
          font-size: 8px;
        }
      }
      .logo-header {
        width: 8px;
        height: 8px;
      }
      .group-nav {
        p {
          margin-right: 5px;
          font-size: 6px;
        }
        display: flex;
        align-items: center;
        .btn-signup {
          font-family: NL;
          background-color: #7b94d6;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          width: 30px;
          height: 10px;
          font-size: 5px;
        }
      }
    }
    .mock-hero {
      margin-top: 5px;
      height: 85px;
      width: 100%;
      border-top: 1px solid #e4e4e7;
      border-bottom: 1px solid #e4e4e7;
      display: flex;
      align-items: center;
      justify-content: center;
      .wrapper-hero {
        width: 100%;
        max-width: 450px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .left-section {
        .top {
          display: flex;
          font-size: 7px;
          p {
            margin-right: 4px;
          }
        }
        h1 {
          font-size: 15px;
          font-family: NB;
          color: #39373d;
        }
        .bottom {
          display: flex;
          align-items: center;
          .icon {
            margin-right: 5px;
            font-size: 10px;
            color: #97a0b2;
          }
          p {
            font-size: 7px;
          }
        }
      }
      .right-section {
        .container-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          border: 1px solid #e4e4e7;
          background-color: #eef1f8;
          width: 65px;
          height: 65px;
          margin-right: 45px;
          .logo-outline {
            width: 40px;
            height: 40px;
          }
          .line {
            position: absolute;
          }
          .line-one {
            background: linear-gradient(
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.1) 10%,
              rgba(0, 0, 0, 0.1) 90%,
              rgba(0, 0, 0, 0) 100%
            );
            width: 1px;
            height: 100px;
            top: -10;
            left: -5px;
          }
          .line-two {
            background: linear-gradient(
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.1) 10%,
              rgba(0, 0, 0, 0.1) 90%,
              rgba(0, 0, 0, 0) 100%
            );
            width: 1px;
            height: 100px;
            top: -10;
            right: -5px;
          }
          .line-three {
            background: linear-gradient(
              to left,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.1) 10%,
              rgba(0, 0, 0, 0.1) 90%,
              rgba(0, 0, 0, 0) 100%
            );
            height: 1px;
            width: 100px;
            top: -5px;
          }
          .line-four {
            background: linear-gradient(
              to left,
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.1) 10%,
              rgba(0, 0, 0, 0.1) 90%,
              rgba(0, 0, 0, 0) 100%
            );
            height: 1px;
            width: 100px;
            bottom: -5px;
          }
          .line-five {
            background: linear-gradient(
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.1) 10%,
              rgba(0, 0, 0, 0.1) 90%,
              rgba(0, 0, 0, 0) 100%
            );
            width: 1px;
            height: 100px;
            top: -10;
            right: -10px;
          }
          .line-six {
            background: linear-gradient(
              rgba(0, 0, 0, 0) 0%,
              rgba(0, 0, 0, 0.1) 10%,
              rgba(0, 0, 0, 0.1) 90%,
              rgba(0, 0, 0, 0) 100%
            );
            width: 1px;
            height: 100px;
            top: -10;
            left: -10px;
          }
        }
      }
    }
    .search-bar {
      width: 100%;
      height: 20px;
      border-bottom: 1px solid #e4e4e7;
      display: flex;
      align-items: center;
      .search-bar-content {
        max-width: 450px;
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .search-bar-left {
          display: flex;
          align-items: center;
          width: 350px;
        }
        input {
          width: 100%;
          outline: none;
          border: none;
          height: 20px;
          font-family: NL;
          font-size: 6px;
          padding: 0;
        }
        .search-bar-right {
          cursor: pointer;
          background-color: #7b94d6;
          width: 15px;
          height: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 66.7%;
          .search-icon {
            font-size: 7px;
            color: #fff;
          }
        }
      }
    }
    .text-recently {
      max-width: 450px;
      width: 100%;
      margin: 6px auto;
      p {
        font-size: 7px;

        font-family: NR;
        color: #39373d;
      }
    }
    .grid-container {
      max-width: 450px;
      width: 100%;
      margin: auto;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: 1fr;
      min-height: 100px;
      grid-gap: 5px;
      margin-bottom: 10px;
    }
    .explore-card {
      position: relative;
      max-width: 450px;
      width: 100%;
      margin: auto;
      height: 60px;
      margin-bottom: 10px;
    }
    .img-explore {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 1;
    }
    .btn-explore {
      position: absolute;
      display: flex;
      align-items: center;
      top: 50%;
      left: 50%;
      padding-left: 4px;
      padding-right: 4px;
      border-radius: 2px;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      z-index: 22;
      font-size: 5px;
      font-family: NL;
      color: var(--almost-white);
      height: 10px;
      background-color: rgb(139, 92, 246);
    }
  }
  .mobile-img-container {
    @media (min-width: 800px) {
      display: none;
    }
    .mobile-img {
      width: 100%;
    }
  }
`;
const HolidazeCard = styled.div`
  cursor: pointer;
  .card-img {
    height: 60px;
    border-radius: 2px;
    border: 1px solid #e4e4e7;
    width: 100%;
    object-fit: cover;
  }
  .card-top {
    margin-top: -3px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-family: NR;
      font-size: 7px;
      color: #39373d;
    }
    .rating {
      display: flex;
      align-items: center;
      .star-icon {
        color: #f3b200;
        font-size: 7px;
        margin-right: 2px;
      }
    }
  }
  .card-description {
    font-family: NL;
    font-size: 6px;
    color: #97a0b2;
  }
  .card-price {
    font-family: NR;
    font-size: 6px;
    color: #7b94d6;
  }
`;
const MockInfo = styled.div`
  display: flex;
  flex-direction: column;
  h2 {
    font-family: interRegular;
    font-size: 18px;
    font-weight: 400;
    color: var(--almost-white);
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
  .top-info {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
  }
  .desc {
    font-size: 15px;
    margin-top: 5px;
    color: var(--text-color-100);
  }
  .links-container {
    display: flex;
    .btn_live {
      cursor: pointer;
      display: flex;
      align-items: center;
      border: none;
      outline: none;
      border-radius: 9999px;
      padding: 6px 15px;
      max-height: 30px;
      font-family: NL;
      font-weight: 600;
      color: var(--almost-white);
      font-size: 12px;
      background: linear-gradient(
        189.7deg,
        rgba(0, 0, 0, 0.2) 90.79%,
        transparent 97.22%
      );
      :hover {
        .icon-arrow {
          transition: 0.3s;
          margin-left: 20px;
        }
      }
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    .btn_gitHub {
      max-height: 30px;
      margin-left: 7px;
      cursor: pointer;
      display: flex;
      align-items: center;
      border: none;
      outline: none;
      border-radius: 9999px;
      padding: 6px 15px;
      font-family: NL;
      font-weight: 600;
      color: var(--almost-white);
      font-size: 12px;
      background: transparent;

      :hover {
        .icon-arrow {
          transition: 0.3s;
          margin-left: 20px;
        }
      }
    }
    .icon-arrow {
      margin-left: 12px;
      font-size: 16px;
    }
  }
`;
const TabButton = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  background: transparent;
  font-family: NL;
  font-size: 14px;
  border-radius: 9999px;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: 1em;
  padding-right: 1em;
  color: var(--almost-white);
`;
export {
  FeatureCardContainer,
  MockContainer,
  HolidazeCard,
  MockInfo,
  TabButton,
};
