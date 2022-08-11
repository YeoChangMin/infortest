import { useCallback, useEffect, useState } from "react";
import styles from "./Title.module.css";

function Title({ storeData }) {
  const [loading, setLoading] = useState(true);
  const [storeInfo, setStoreInfo] = useState({});

  const getStoreInfo = useCallback(() => {
    setStoreInfo(() => storeData);
    setLoading(false);
  }, [storeData]);

  useEffect(() => {
    getStoreInfo();
  }, [getStoreInfo]);
  console.log(storeInfo);
  return (
    <div className={styles.title}>
      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <>
          <img src="../img/icon/fork.png" alt="logo" />
          <h4>{storeInfo.store_name}</h4>
        </>
      )}
    </div>
  );
}

export default Title;
