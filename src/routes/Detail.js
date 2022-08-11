import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState({});
  const [requiredOptions, setRequiredOptions] = useState([]);
  const [moreOptions, setMoreOptions] = useState([]);
  const [count, setCount] = useState(1);
  const [finalPrice, setFinalPrice] = useState(0);

  const getMenu = useCallback(() => {
    setMenu(() => location.state.menu);
    setRequiredOptions(() =>
      location.state.menu.options.filter(
        (option) => option.option_required === true
      )
    );
    setMoreOptions(() =>
      location.state.menu.options.filter(
        (option) => option.option_required === false
      )
    );
    setFinalPrice(() => location.state.menu.menu_price);
    setLoading(false);
  }, [location.state.menu]);

  useEffect(() => {
    getMenu();
  }, [getMenu]);

  function handleUpClick() {
    setCount((prev) => prev + 1);
  }
  function handleDownClick() {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  }

  const [radio, setRadio] = useState();
  const radioHandler = (e) => {
    console.log(e);
    setRadio(e.target.value);
    setFinalPrice(
      () => location.state.menu.menu_price + Number(e.target.value)
    );
  };
  console.log(radio);

  return (
    <div className={styles.Detail}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className={styles.menu_img}>
            <img src={menu.menu_img} alt={menu.menu_name} />
          </div>

          <h4 className={styles.menu_name}>{menu.menu_name}</h4>

          <div className={styles.menu_detail_description}>
            {menu.menu_detail_description}
          </div>

          <div className={styles.price_container}>
            <p className={styles.price_text}>가격</p>
            <p className={styles.price_text}>
              {menu.menu_price.toLocaleString()} 원
            </p>
          </div>

          <div className={styles.options}>
            <div className={styles.required_title}>
              <p className={styles.required_text}>필수 선택</p>
              <p className={styles.requiredtext}>필수 선택</p>
            </div>
            {requiredOptions.map((option) => (
              <ul className={styles.option_list} key={option.id}>
                <label htmlFor={option.id} className={styles.option_text}>
                  <input
                    id={option.id}
                    className={styles.option_input}
                    type="radio"
                    name="required"
                    value={option.option_price}
                    onChange={radioHandler}
                  />
                  <li className={styles.option_name}>{option.option_name} </li>
                  <li className={styles.option_description}>
                    ({option.option_description})
                  </li>
                </label>
                <li className={styles.option_price}>
                  +{option.option_price.toLocaleString()}원
                </li>
              </ul>
            ))}
          </div>

          <div className={styles.options}>
            <div className={styles.more_title}>추가 선택</div>
            {moreOptions.map((option) => (
              <ul className={styles.option_list} key={option.id}>
                <input
                  id={option.id}
                  className={styles.option_input}
                  type="checkbox"
                  name="more"
                  value={option}
                />

                <label htmlFor={option.id} className={styles.option_text}>
                  <li className={styles.option_name}>{option.option_name} </li>
                  <li className={styles.option_description}>
                    ({option.option_description})
                  </li>
                </label>
                <li className={styles.option_price}>
                  +{option.option_price.toLocaleString()}원
                </li>
              </ul>
            ))}
          </div>

          <div className={styles.price_container}>
            <p className={styles.price_text}>수량</p>
            <div className={styles.count}>
              <button onClick={handleDownClick}>-</button>
              <div className={styles.number}>{count}</div>
              <button onClick={handleUpClick}>+</button>
            </div>
          </div>

          <p className={styles.notice}>
            메뉴 사진은 연출된 이미지로 실제 조리된 음식과 다를 수 있습니다.
          </p>

          <Link
            to={`/store/${location.state.store.id}`}
            state={{
              menu: menu,
              store: location.state.store,
              finalPrice: finalPrice,
              radio: radio,
            }}
            className={styles.basket}
          >
            <div className={styles.final_price}>
              총 {finalPrice.toLocaleString()} 원
            </div>
            <h4>담기</h4>
          </Link>
        </>
      )}
    </div>
  );
}

export default Detail;
