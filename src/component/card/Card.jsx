import React from "react";

const Card = () => {
 
  return (
    <div className="flex justify-between gap-5 my-5 flex-wrap">
      <div
        className="px-10 py-10 border rounded-md text-center flex-grow"
        style={{ backgroundColor: "#8272DA" }}
      >
        <h1 className="text-3xl font-normal">23</h1>
        <p>Chennai</p>
      </div>
      <div
        className="px-10 py-10 border rounded-md text-center flex-grow"
        style={{ backgroundColor: "#fd6663" }}
      >
        <h1 className="text-3xl font-normal">December 20</h1>
        <p>14:23:08</p>
      </div>
      <div
        className="px-10 py-10 border rounded-md text-center flex-grow"
        style={{ backgroundColor: "#FCA201" }}
      >
        <h1 className=" text-3xl font-normal">
          Build Using
        </h1>
        <p>React</p>
      </div>
    </div>
  );
};

export default Card;
