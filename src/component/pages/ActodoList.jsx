import React from "react";
import Header from "../Header/Header";
import Card from "../card/Card";
import Todo from "../todo/Todo";
import { useLocation } from "react-router-dom";

const ActodoList = () => {
  const data = useLocation();
  const a = data?.state?.input;
  return (
    <div className="bg-black p-10">
      <div className="bg-[white] p-10 border rounded-md">
        <Header a={a} />
        <Card />
        <Todo />
      </div>
    </div>
  );
};

export default ActodoList;
