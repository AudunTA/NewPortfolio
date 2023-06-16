//images
import holidazeDesktopImage from "../src/assets/images/holidazeDesktop.png";
import reactoTechImage from "../src/assets/images/reactoTechMobile.png";
import auctionHouse from "../src/assets/images/auctionHouse.png";
import adventureTrailsHike from "../src/assets/images/adventureTrailsHike.png";
import { FaReact } from "react-icons/fa";
export const featuredData = [
  {
    id: 1,
    title: "Holidaze",
    src: holidazeDesktopImage,
    shortDescription: "A venue booking web application",
  },
  {
    id: 2,
    title: "ReactoTech",
    src: reactoTechImage,
    shortDescription: "A mock ecommerce store",
  },
];

export const data = [
  {
    id: 1,
    title: "Holidaze",
    src: holidazeDesktopImage,
    shortDescription: "A venue booking web application",
    longDescription:
      "This was my last exam project at Noroff, and was graded A. The project is built in React and showcase alot of what i learned during my font-end development studies at Noroff. Under the GitHub repository you can see all the features that this project have.",
    techStack: [
      {
        name: "react",
      },
      {
        name: "javaScript",
      },
    ],
    liveSite: "https://whimsical-alpaca-698d0e.netlify.app/",
    gitHub: "https://github.com/AudunTA/Holidaze",
  },

  {
    id: 2,
    title: "ReactoTech",
    src: reactoTechImage,
    shortDescription: "A mock tech store",
    longDescription:
      "ReactoTech is an ecommerce store, that i built in React to strenghten my react skills. The application is connected to an API, and the user is able to sort, search, view product information, reviews and add to cart. Full description is under the github repository",
    techStack: [
      {
        name: "react",
      },
      {
        name: "javaScript",
      },
    ],
    liveSite: "https://audunta.github.io/ReactoTech/",
    gitHub: "https://github.com/AudunTA/ReactoTech",
  },
  {
    id: 3,
    title: "AuctionHouse",
    src: auctionHouse,
    shortDescription: "A bidding web application",
    longDescription:
      "AuctionHouse is my semesterproject for the 3rd semester at Noroff. This is an Auction website that has alot of interactive functionallity using APIs. (including posting, listing, user authentication etc)",
    techStack: [
      {
        name: "html",
      },
      {
        name: "css",
      },
      {
        name: "javaScript",
      },
      {
        name: "bootstrap",
      },
    ],
    liveSite: "https://audunta.github.io/SemesterAssignment_Auctionhouse/",
    gitHub: "https://github.com/AudunTA/SemesterAssignment_Auctionhouse",
  },
  {
    id: 4,
    title: "Adventure Trails Hike",
    src: adventureTrailsHike,
    shortDescription: "A hiking / tours web application",
    longDescription:
      "This is Adventure Trails Hike, here i focues on writing better and clean HTML and CSS, and making components easy to globally change on all pages. slight use of JavaScript for the navigation, This was my first exam at Noroff and was graded A.",
    techStack: [
      {
        name: "html",
      },
      {
        name: "css",
      },
    ],
    liveSite: "https://admirable-parfait-746c8d.netlify.app/",
    gitHub: "https://github.com/AudunTA/ATH",
  },
];
