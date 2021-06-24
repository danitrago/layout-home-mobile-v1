import React from "react";
import TopBar from "../components/TopBar";
import MainForm from "../components/MainForm";
import Ads from "../components/Ads";
import Reviews from "../components/Reviews";

const Home = () => {
  return (
    <>
      <TopBar />
      <MainForm />
      <Ads/>
      <Reviews/>
    </>
  );
};

export default Home;
