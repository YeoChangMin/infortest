import { Link } from "react-router-dom";

function InforYou() {
  return (
    <>
      <Link to="/login">사장님</Link>
      <Link to="/user">사용자</Link>
      <Link to="/managerlogin">관리자</Link>
    </>
  );
}

export default InforYou;
