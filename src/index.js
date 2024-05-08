import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/login/Login";
import SignUp from "./component/login/SignUp";
import Landing from "./component/landing/Landing";
import ActodoList from "./component/pages/ActodoList";

const App = () => {
  const [user, SetUser] = useState([
    {
      id: 1,
      userName: "aarthi",
      password: "123",
    },
  ]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login user={user} SetUser={SetUser} />} />
          <Route
            path="/signup"
            element={<SignUp user={user} SetUser={SetUser} />}
          />
          <Route path="/actodo" element={<ActodoList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("root"));
