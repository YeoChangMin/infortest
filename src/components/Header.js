import "./Header.css";

export default function Header() {
  return (
    <header>
      <h4 className="inforyou">
        In for You
        <img
          src="../img/icon/user-interface.png"
          alt=""
          width="24"
          height="24"
        />
      </h4>
      <div className="title">
        <div className="icon">
          <img src="../img/icon/fork.png" alt="icon" width="20" />
        </div>
        <div className="rest_name">
          <h2>rest_name</h2>
        </div>
      </div>
    </header>
  );
}
