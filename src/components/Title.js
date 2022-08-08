import styles from "./Title.module.css";

function Title({ ownerInfo }) {
  console.log(ownerInfo);
  return (
    <div className={styles.title}>
      <img src="./img/icon/fork.png" alt="logo" />
      <h4>{ownerInfo.store[0].title}</h4>
    </div>
  );
}

export default Title;
