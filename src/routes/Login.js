import { useEffect, useState } from "react";
import { getData } from "../api";
import "./Login.css";

function Login() {
  const [data, setData] = useState([]);

  const handleLoad = async () => {
    const { owner } = await getData();
    setData(owner);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <img className="logo" src="../img/LOGO.jpg" alt="" width="180" />
      <form onSubmit={onSubmit} className="login_form">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <p>Forgot password</p>
        <button type="submit">로그인</button>
      </form>

      <div className="line">or</div>
      <div className="entering_btn">입점 신청하기</div>
      <footer>
        <p>In for You</p>
      </footer>
    </div>
  );
}
export default Login;
