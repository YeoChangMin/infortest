import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div>
      <h1>페이지를 찾을 수 없습니다</h1>
      <Link to="/user">홈으로 가기</Link>
    </div>
  );
}

export default NotFoundPage;
