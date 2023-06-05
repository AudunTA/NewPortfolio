import React from "react";
import { Outlet } from "react-router-dom";
import { FlexContainer } from "../styles/Layout.styles";
import SideBar from "../components/SideBar";
import { UnderSideBar } from "../styles/Layout.styles";
import Footer from "../components/Footer";
import { FlexCol } from "../styles/Layout.styles";
function Layout() {
  return (
    <>
      <FlexContainer>
        <SideBar />
        <UnderSideBar />
        <FlexCol>
          <Outlet />
          <Footer />
        </FlexCol>
      </FlexContainer>
    </>
  );
}

export default Layout;
