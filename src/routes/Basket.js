import { useLocation } from "react-router-dom";
import styles from "./Basket.module.css";

function Basket() {
  const location = useLocation();

  console.log(location);
  return (
    <div className={styles.Basket}>
      <h4 className={styles.basket_title}>장바구니</h4>

      <div className={styles.order_list}></div>
    </div>
  );
}

export default Basket;
