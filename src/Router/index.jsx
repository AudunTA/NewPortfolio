import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Specific from "../components/Specific";
import Layout from "../Layout";
function Router() {
  return (
    <>
      <Routes basename="Holidaze">
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Specific/:id" element={<Specific />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Router;
