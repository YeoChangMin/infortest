import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const [loading, setLoading] = useState(true);
  const [owners, setOwners] = useState([]);
  const [ownerId, setOwnerId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getOwners = async () => {
    const json = await (await fetch(`http://localhost:3001/inforyou`)).json();

    setOwners(json[0].owners);
    setLoading(false);
  };
  useEffect(() => {
    getOwners();
  }, []);
  console.log(owners);

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "ownerId") {
      setOwnerId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let ownerData = owners.filter(
        (owner) => owner.owner_login_id === Number(ownerId)
      );
      if (ownerData[0].owner_password === password) {
        navigate("/home", {
          state: {
            ownerInfo: ownerData,
          },
        });
      } else {
        alert(
          "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
        );
      }
    } catch (error) {
      console.log(error);
      alert(
        "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
      );
    }
  };

  return (
    <div className="Login">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <img className="logo" src="../img/LOGO.jpg" alt="" width="180" />
          <form onSubmit={onSubmit} className="login_form">
            <input
              name="ownerId"
              type="text"
              placeholder="아이디"
              required
              value={ownerId}
              onChange={onChange}
            />
            <input
              name="password"
              type="password"
              placeholder="비밀번호"
              required
              value={password}
              onChange={onChange}
            />
            <p>Forgot password</p>

            <input type="submit" value="로그인" className="login_btn" />
          </form>
          <div className="line">or</div>
          <div className="entering_btn">입점 신청하기</div>
          <footer>&copy; {new Date().getFullYear()} InforYou</footer>
        </>
      )}
    </div>
  );
}
export default Login;
