import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Title from "../components/Title";
import "./Home.css";

function Home({ ownerInfo }) {
  console.log(ownerInfo);
  return (
    <>
      <Header />
      <h2 className="owner_name">{ownerInfo.name}님, 반갑습니다.</h2>
      {ownerInfo.store.map((item) => (
        <Link to="/main" key={item.id} className="store">
          {item.title}
        </Link>
      ))}
    </>
  );
}

export default Home;
