import React from "react";
import {
  FeatureCardContainer,
  MockContainer,
  HolidazeCard,
  MockInfo,
  TabButton,
} from "./FeatureCard.styled";
import gridpattern from "../../assets/images/backgroundfeature.png";
import { ReactComponent as LogoSolid } from "../../assets/images/holidaze/logoSolid.svg";
import { ReactComponent as LogoOutline } from "../../assets/images/holidaze/logo.svg";
import background from "../../assets/images/holidaze/panoramaCityImage.jpg";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaSearch,
  FaReact,
} from "react-icons/fa";
import { useState } from "react";
// icon
import { FaStar } from "react-icons/fa";
import JavascriptIcon from "@mui/icons-material/Javascript";
import { HiArrowNarrowRight } from "react-icons/hi";

//images
import madrid from "../../assets/images/holidaze/madrid.png";
import sweden from "../../assets/images/holidaze/sverige.png";
import denmark from "../../assets/images/holidaze/denmark.png";
import germany from "../../assets/images/holidaze/germany.png";
import italy from "../../assets/images/holidaze/italy.png";
import kristiansand from "../../assets/images/holidaze/kristiansand.png";
import rome from "../../assets/images/holidaze/rome.png";
import sveits from "../../assets/images/holidaze/sveits.png";

import mobileImg from "../../assets/images/holidaze/holidazeForMobile.png";
//tilt effect
import Tilt from "react-parallax-tilt";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { WrapperContent } from "../Home/Home.styled";
import { ContentContainer } from "../Home/Home.styled";
const cardInfo = [
  {
    title: "Cozy place",
    place: "Madrid",
    rating: 3,
    price: "$495 per night",
    img: madrid,
    timer: 100,
  },
  {
    title: "Swedish farm",
    place: "Sweden",
    rating: 4,
    price: "$105 per night",
    img: sweden,
    timer: 200,
  },
  {
    title: "Snowy cabin",
    place: "Germany",
    rating: 2,
    price: "$55 per night",
    img: germany,
    timer: 300,
  },
  {
    title: "Indoor spa",
    place: "Italy",
    rating: 5,
    price: "$231 per night",
    img: italy,
    timer: 400,
  },
  {
    title: "Pool experience",
    place: "Kristiansand",
    rating: 3,
    price: "$77 per night",
    img: kristiansand,
    timer: 500,
  },
  {
    title: "Amazing yatch",
    place: "Rome",
    rating: 5,
    price: "$677 per night",
    img: rome,
    timer: 600,
  },
  {
    title: "Erdhaus Villa Vals",
    place: "Sveits",
    rating: 4,
    price: "$22 per night",
    img: sveits,
    timer: 700,
  },
  {
    title: "Pool",
    place: "Denmark",
    rating: 5,
    price: "$22 per night",
    img: denmark,
    timer: 800,
  },
];
function FeatureCard() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <FeatureCardContainer>
      <MockContainer>
        <div className="mock-outline">
          <div className="mock-header" data-aos="fade-down">
            <div className="content-header">
              <div className="group-logo">
                <LogoSolid className="logo-header" />
                <p>Holidaze</p>
              </div>
              <div className="group-nav">
                <p>Explore</p>
                <div className="btn-signup">Sign Up</div>
              </div>
            </div>
          </div>
          <div className="mock-hero">
            <div className="wrapper-hero">
              <div
                className="left-section"
                data-aos="fade-right"
                data-aos-duration="700"
              >
                <div className="top">
                  <p>1000+ venues</p>
                  <p>200+ Verified managers</p>
                  <p>100% Satisfaction guarantee</p>
                </div>

                <h1>Find the perfect venue with holidaze</h1>
                <div className="bottom">
                  <div className="icons">
                    <FaFacebookSquare className="icon" />
                    <FaInstagram className="icon" />
                    <FaTwitter className="icon" />
                  </div>
                  <p>Share your experience</p>
                </div>
              </div>
              <div
                className="right-section"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="container-logo">
                  <LogoOutline className="logo-outline" />
                  <div className="line line-one"></div>
                  <div className="line line-two"></div>
                  <div className="line line-three"></div>
                  <div className="line line-four"></div>
                  <div className="line line-five"></div>
                  <div className="line line-six"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="search-bar">
            <div
              className="search-bar-content"
              data-aos="fade"
              data-aos-duration="1000"
              data-aos-offset="0"
            >
              <div className="search-bar-left">
                <input placeholder="Search venues.." />
              </div>
              <div className="search-bar-right">
                <FaSearch className="search-icon" />
              </div>
            </div>
          </div>
          <div className="text-recently">
            <p>Recently added venues</p>
          </div>
          <div className="grid-container">
            {cardInfo.map((ele) => {
              return (
                <HolidazeCard
                  key={ele.title}
                  data-aos="fade-up"
                  data-aos-duration={ele.timer}
                >
                  <img src={ele.img} className="card-img" />
                  <div className="card-top">
                    <p>{ele.title}</p>
                    <div className="rating">
                      <FaStar className="star-icon" />
                      <p>{ele.rating}</p>
                    </div>
                  </div>
                  <p className="card-description">{ele.place}</p>
                  <p className="card-price">{ele.price}</p>
                </HolidazeCard>
              );
            })}
          </div>
          <div className="explore-card">
            <img src={background} className="img-explore"></img>
            <div className="btn-explore">Explore, filter and more!</div>
          </div>
        </div>
        <div className="mobile-img-container">
          <img className="mobile-img" src={mobileImg}></img>
        </div>
      </MockContainer>
      <MockInfo>
        <div className="top-info">
          <h2>Holidaze</h2>
          <p className="desc">A venue booking web-application</p>
        </div>
      </MockInfo>
    </FeatureCardContainer>
  );
}

export default FeatureCard;
