import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Tabs from "../components/Tabs";
import Title from "../components/Title";
import "./Main.css";

function Main() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [storeInfo, setStoreInfo] = useState({});

  const getStoreInfo = useCallback(() => {
    setStoreInfo(() => location.state.store);
    setLoading(false);
  }, [location.state.store]);

  useEffect(() => {
    getStoreInfo();
  }, [getStoreInfo]);

  return (
    <div className="Main">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Header />
          <Title storeData={storeInfo} />
          <Tabs storeData={storeInfo} />
        </>
      )}
    </div>
  );
}

export default Main;
