import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Menus from "../components/Menus";
import Title from "../components/Title";
import styles from "./Store.module.css";

function Store() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [store, setStore] = useState({});
  const [finalPrice, setFinalPrice] = useState(0);
  console.log(location.state);

  const getStore = useCallback(() => {
    setStore(() => location.state.store);
    setFinalPrice((prev) => prev + location.state.finalPrice);
    setLoading(false);
  }, [location.state.store, location.state.finalPrice]);

  useEffect(() => {
    getStore();
  }, [getStore]);

  console.log(store);
  console.log(finalPrice);

  return (
    <div className={styles.Store}>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          <Title storeData={store} />

          <div className={styles.ref_img}>
            <img src="" alt="가게대표이미지" />
          </div>

          <ul className={styles.category_bar}>
            {store.categorys.map((category) => (
              <li className={styles.category_item} key={category.id}>
                {category.category_name}
              </li>
            ))}
          </ul>

          {store.categorys.map((category) => (
            <div className={styles.categorys} key={category.id}>
              <div className={styles.category_name}>
                {category.category_name}
              </div>
              <Menus store={store} category={category.category_name} />
            </div>
          ))}
          {finalPrice ? (
            <Link to="/store/basket" state={{}} className={styles.basket}>
              <div className={styles.final_price}>
                총 {finalPrice.toLocaleString()} 원
              </div>
              <h4>주문하기</h4>
            </Link>
          ) : null}
        </>
      )}
    </div>
  );
}

export default Store;
