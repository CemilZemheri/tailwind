import React from "react";

const SpacingAndSizing = () => {
  return (
    <>
      <div>
        {" "}
        <h3 className="text-2xl text-center">Spacing And Sizing</h3>{" "}
        <button className="text-2xl uppercase bg-blue-500 py-4 mx-4">
          tıngıldat
        </button>
        <button className="text-2xl uppercase bg-blue-500 px-4 my-4">
          tıngıldat
        </button>
        <button className="text-2xl uppercase bg-blue-500 py-4 mx-4">
          tıngıldat
        </button>
        <button className="text-2xl uppercase bg-red-500 py-4 ms-4">
          tıngıldat
        </button>
      </div>
      <div>
        <button className=" bg-green-700 text-white mx-4 px-4 py-2 border border-red-600 rounded-md">
          tıkla
        </button>
        <button className=" bg-slate-700 text-white mx-4 px-4 py-2 border border-red-600 rounded-md">
          tıkla
        </button>
        <button className=" bg-green-700 text-white mx-4 px-4 py-2 border border-red-600 rounded-md">
          tıkla
        </button>
        <button className=" bg-green-700 text-white mx-4 px-4 py-2 border border-red-600 w-20 h-20 rounded-full">
          tıkla
        </button>
        <button className=" bg-blue-700 text-white mx-4 px-4 py-2 border-[3px]border-red-600 rounded-[50%]">
          tıkla
        </button>
      </div>

      <div>
        <button className="bg-indigo-400 rounded-full py-2 mx-1 w-1/2">
            tıklandıkça
        </button>
        <button className="bg-indigo-400 rounded-full py-2 mx-1 w-1/2 h-10">
            tıklandıkça
        </button>
      </div>
    </>
  );
};

export default SpacingAndSizing;
