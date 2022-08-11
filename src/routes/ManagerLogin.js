import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ManagerLogin() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [managerId, setManagerId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const getOwners = async () => {
    const json = await (await fetch(`http://localhost:3001/inforyou`)).json();

    setData(json);
    setLoading(false);
  };
  useEffect(() => {
    getOwners();
  }, []);
  console.log(data);

  const onChange = (event) => {
    const { name, value } = event.target;
    if (name === "managerId") {
      setManagerId(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (managerId === "1" && password === "1") {
      navigate("/management", {
        state: {
          data: data,
        },
      });
    } else {
      alert(
        "아이디 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
      );
    }
  };

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <img className="logo" src="../img/LOGO.jpg" alt="" width="180" />
          <form onSubmit={onSubmit} className="login_form">
            <input
              name="managerId"
              type="text"
              placeholder="아이디"
              required
              value={managerId}
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

          <footer>&copy; {new Date().getFullYear()} InforYou</footer>
        </>
      )}
    </>
  );
}

export default ManagerLogin;
