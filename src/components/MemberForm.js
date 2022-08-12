import { useState } from "react";
import styles from "./MemberForm.module.css";

function MemberForm({ setIsShow }) {
  const [values, setValues] = useState({
    memberName: "",
    memberId: 0,
    memberPassword: "",
    memberPhoneNumber: "",
  });

  const handleChange = (name, value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setIsShow(false);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.member_form}>
      <div className={styles.form_list}>
        <label className={styles.labels}>대표자명</label>
        <input
          name="memberName"
          value={values.memberName}
          onChange={handleInputChange}
          className={styles.inputs}
        ></input>
      </div>
      <div className={styles.form_list}>
        <label className={styles.labels}>아이디</label>
        <input
          name="memberId"
          value={values.memberId}
          onChange={handleInputChange}
          className={styles.inputs}
        ></input>
      </div>
      <div className={styles.form_list}>
        <label className={styles.labels}>비밀번호</label>
        <input
          name="memberPassword"
          value={values.memberPassword}
          onChange={handleInputChange}
          className={styles.inputs}
        ></input>
      </div>
      <div className={styles.form_list}>
        <label className={styles.labels}>대표 전화번호 </label>{" "}
        <input
          name="memberPhoneNumber"
          value={values.memberPhoneNumber}
          onChange={handleInputChange}
          className={styles.inputs}
        ></input>
      </div>
      <button type="submit" className={styles.confirm_btn}>
        확인
      </button>
    </form>
  );
}
export default MemberForm;
