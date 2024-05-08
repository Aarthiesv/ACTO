import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login({ user, setUser }) {
    const navigate=useNavigate ()
  const [input, setInput] = useState();
  const [password, setPassword] = useState();
  const [loginUser, setLoginUser] = useState(true);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = () => {
    console.log(user);
    let isLoggedIn = false;
    user.forEach(function (data) {
      if (data.userName === input && data.password === password) {
        console.log("login success");
        isLoggedIn = true;
        navigate("/actodo", { state: { input: input } });
      }
    });
    if (!isLoggedIn) {
      console.log("failed");
        setLoginUser(false);
        
    }
  };

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <div className="">
          <h1 className="text-2xl font-semibold"> Hey Hi </h1>
          {loginUser ? (
            <p> I help you manage your Activities after you login:)</p>
          ) : (
            <p className="text-red-500">Please Sign up Before you Login</p>
          )}

          <div className="flex flex-col gap-2 my-2">
            <input
              type="text"
              value={input}
              placeholder="username"
              className="border-black w-52 border rounded-md p-1 bg-transparent "
              onChange={handleInputChange}
            />
            <input
              type="password"
              value={password}
              placeholder="password"
              className="border-black w-52 border rounded-md p-1 bg-transparent "
              onChange={handlePasswordChange}
            />

            <button
              className="w-24 bg-[#8272DA] border rounded-md p-1 text-[white] "
              onClick={handleLogin}
            >
              Login
            </button>
            <p>
              Don't have an account ?.
              <Link to={"/signup"} className="underline">
                {" "}
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
