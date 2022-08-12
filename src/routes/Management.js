import { useEffect, useState } from "react";
import MemberForm from "../components/MemberForm";
import styles from "./Management.module.css";

function Management() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [owners, setOwners] = useState([]);
  const [isShow, setIsShow] = useState(false);

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
        <div className={styles.Management}>
          <div className={styles.header}>인포리지널</div>
          <div className={styles.container}>
            <div className={styles.side_bar}>
              <h4>회원 관리</h4>
            </div>

            <div className={styles.main}>
              <div className={styles.main_header}>
                <h3>회원 관리</h3>
                <button
                  onClick={() => setIsShow(true)}
                  className={styles.add_btn}
                >
                  글쓰기
                </button>
              </div>
              {isShow ? (
                <MemberForm setIsShow={setIsShow} />
              ) : (
                <div className={styles.contents}>
                  {data[0].owners.map((owner) => (
                    <ul className={styles.owners} key={owner.id}>
                      <li>{owner.owner_name}</li>
                      <li>{owner.owner_phone_number}</li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Management;
