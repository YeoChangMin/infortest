import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import "./User.css";

function User() {
  const [loading, setLoading] = useState(true);
  const [stores, setStores] = useState([]);

  const getStores = async () => {
    const json = await (await fetch(`http://localhost:3001/inforyou`)).json();
    setStores(json[1].stores);
    setLoading(false);
  };

  useEffect(() => {
    getStores();
  }, []);
  console.log(stores);

  return (
    <div className="User">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Header />
          <h4 className="store_list_title">가게 목록</h4>
          {stores.map((store) => (
            <Link
              to={`/store/${store.id}`}
              state={{ store: store }}
              className="stores"
              key={store.id}
            >
              {store.store_name}
            </Link>
          ))}
        </>
      )}
    </div>
  );
}

export default User;
