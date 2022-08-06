import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/Login";
import "./Owner.css";

function Owner() {
  return (
    <div className="Owner">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Owner;
