import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import {Link}

function SignUp({ user, SetUser }) {
  const [input, setInput] = useState();
    const [password, setPassword] = useState();
    
    const navigate= useNavigate ()

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleAddUser = () => {
      SetUser([...user, { userName: input, password: password }]);
      navigate("/")
  };
  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <div className="">
          <h1 className="text-2xl font-semibold"> Hey Hi </h1>
          <p> You Can Signup here :)</p>
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
            <input
              type="password"
              placeholder=" Confirm password"
              className="border-black w-52 border rounded-md p-1 bg-transparent "
            />
            <button
              className="w-24 bg-[#FCA201] border rounded-md p-1  "
              onClick={handleAddUser}
            >
              SignUp
            </button>
            <p>
              Already have an account ?.
              <Link to={"/"} className="underline">
                {" "}
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
