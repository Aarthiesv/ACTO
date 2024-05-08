import React, { useState } from "react";

const Todo = () => {
  const [dataList, SetDataList] = useState("");

  const [TodoList, setTodoList] = useState([
    // {
    //     id: 1,
    //     activity:'aa'
    // },
  ]);

  const handleOnChange = (e) => {
    SetDataList(e.target.value);
  };

  const handleAddOnClick = () => {
    setTodoList([...TodoList, { id: TodoList.length + 1, activity: dataList }]);
    SetDataList("");
  };
  const handleDeleteClick = (ItemId) => {
    const DeleteList = TodoList.filter(function (data) {
      if (data?.id === ItemId) {
        return false;
      } else return true;
    });
    console.log("DeleteData:", DeleteList);

    setTodoList(DeleteList);
  };
  return (
    <div className="">
      <div className="flex gap-5 flex-wrap ">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-normal">Mange Activities</h1>
          <div>
            <input
              className="border border-black bg-transparent  p-1  "
              type="text"
              value={dataList}
              placeholder="Next Activity"
              onChange={handleOnChange}
            />
            <button
              className="bg-black text-white p-1 border-border-black"
              onClick={handleAddOnClick}
            >
              Add
            </button>
          </div>
        </div>

        <div className="bg-[#BDB4EA] border rounded-md flex-grow  px-5 py-3">
          <div className="">
            <h1 className="text-2xl font-medium">Today's Activity</h1>
            {TodoList?.map((data,index) => (
              <div className="flex justify-between">
                {/* {data?.activity=== } */}
                    <p>{index + 1} . {data?.activity}</p>

                {/* {TodoList === "activity" ? (
                  <p>{data?.activity}</p>
                ) : (
                            <p>aarthi</p>
                )} */}
                <button onClick={() => handleDeleteClick(data?.id)}>
                  {" "}
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
