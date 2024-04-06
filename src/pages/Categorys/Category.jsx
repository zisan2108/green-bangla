import React from "react";

export const Category = () => {
  return (
    <div>
      <h1 className="bg-[#091242] text-white text-center text-5xl mb-10 p-3">
        Category
      </h1>

      <div className="bg-green-200 text-black w-[300px] md:w-[600px] lg:w-[1200px] mx-auto p-4 grid grid-cols-3 gap-4">
        <div className="bg-green-500 col-start-1 col-end-4">1</div>
        <div className="bg-green-500  ">2</div>
        <div className="bg-green-500">3</div>
        <div className="bg-green-500">4</div>
        <div className="bg-green-500">5</div>
      </div>
    </div>
  );
};
