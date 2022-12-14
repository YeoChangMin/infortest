import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Header from "../components/Header";
import "./Home.css";

function Home() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [ownerInfo, setOwnerInfo] = useState({});
  const [stores, setStores] = useState([]);

  const getStores = async () => {
    const json = await (await fetch(`http://localhost:3001/inforyou`)).json();
    setStores(json[1].stores);
    setLoading(false);
  };

  const getOwnerInfo = useCallback(() => {
    setOwnerInfo(() => location.state.ownerInfo[0]);
  }, [location.state.ownerInfo]);

  useEffect(() => {
    getStores();
    getOwnerInfo();
  }, [getOwnerInfo]);
  console.log(stores, ownerInfo);

  return (
    <div className="Home">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Header />
          <h2 className="owner_name">{ownerInfo.owner_name}님, 반갑습니다.</h2>
          {stores.map((store) => (
            <Link
              to={`/main/${store.id}`}
              state={{ store: store }}
              key={store.id}
              className="store"
            >
              {store.store_name}
            </Link>
          ))}
        </>
      )}
    </div>
  );
}

export default Home;
