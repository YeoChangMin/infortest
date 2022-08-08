import { useState } from "react";
import MenuManage from "./MenuManage";
import styles from "./Tabs.module.css";

function Tabs({ ownerInfo }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bloc_tabs}>
        <button
          className={
            toggleState === 1
              ? `${styles.tabs} ${styles.active_tabs}`
              : styles.tabs
          }
          onClick={() => toggleTab(1)}
        >
          주문내역
        </button>
        <button
          className={
            toggleState === 2
              ? `${styles.tabs} ${styles.active_tabs}`
              : styles.tabs
          }
          onClick={() => toggleTab(2)}
        >
          메뉴관리
        </button>
        <button
          className={
            toggleState === 3
              ? `${styles.tabs} ${styles.active_tabs}`
              : styles.tabs
          }
          onClick={() => toggleTab(3)}
        >
          가게관리
        </button>
      </div>

      <div className={styles.content_tabs}>
        <div
          className={
            toggleState === 1
              ? (styles.content, styles.active_content)
              : styles.content
          }
        ></div>

        <div
          className={
            toggleState === 2
              ? (styles.content, styles.active_content)
              : styles.content
          }
        >
          <MenuManage ownerInfo={ownerInfo} />
        </div>

        <div
          className={
            toggleState === 3
              ? (styles.content, styles.active_content)
              : styles.content
          }
        ></div>
      </div>
    </div>
  );
}

export default Tabs;
