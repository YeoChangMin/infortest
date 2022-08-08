import React from "react";
import AddMenu from "../components/AddMenu";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Title from "../components/Title";

function Main({ ownerInfo }) {
  console.log(ownerInfo);
  return (
    <>
      <Header />
      <Title ownerInfo={ownerInfo} />
      <Tabs ownerInfo={ownerInfo} />
    </>
  );
}

export default Main;
