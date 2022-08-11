import { useEffect, useState } from "react";
import "./Management.css";

function Management() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [owners, setOwners] = useState([]);

  const getData = async () => {
    const json = await (await fetch(`http://localhost:3001/inforyou`)).json();
    setData(json);
    setLoading(false);
  };

  const getOwners = () => {
    setOwners(data[0].owners);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(data);
  return (
    <>
      {loading ? (
        <h1>Loading </h1>
      ) : (
        <div className="Management">
          <div className="header">인포리지널</div>
          <div className="container">
            <div className="side_bar">
              <h4>회원 관리</h4>
            </div>
            <div className="main">
              <h3>회원 관리</h3>
              <div className="contents">
                {data[0].owners.map((owner) => (
                  <ul className="owners" key={owner.id}>
                    <li>{owner.owner_name}</li>
                    <li>{owner.owner_phone_number}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Management;
