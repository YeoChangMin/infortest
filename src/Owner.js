import "./Owner.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";
import NotFoundPage from "./routes/NotFoundPage";
import Main from "./routes/Main";
import User from "./routes/User";
import InforYou from "./routes/InforYou";
import Store from "./routes/Store";
import Detail from "./routes/Detail";
import ManagerLogin from "./routes/ManagerLogin";
import Management from "./routes/Management";
import Basket from "./routes/Basket";

function App() {
  return (
    <div className="Owner">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<InforYou />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/main/:id" element={<Main />} />
            <Route path="/user/" element={<User />} />
            <Route path="/store/:id" element={<Store />} />
            <Route path="/store/detail/:id" element={<Detail />} />
            <Route path="/store/basket" element={<Basket />} />
            <Route path="/managerlogin" element={<ManagerLogin />} />
            <Route path="/management" element={<Management />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
