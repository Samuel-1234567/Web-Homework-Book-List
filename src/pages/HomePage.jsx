import { Outlet } from "react-router";
import { use, useState } from "react";

const Homepage = () => {
  return (
    <div>
      <h1 className="text-[30px] font-bold mb-4 mt-[20px]">Home</h1>
      <h6 className="text-[20px]">Welcome to my website</h6>
      <img
        src="./rickroll-roll.gif"
        alt="Rickroll didn't load :("
        className="h-[500px] mt-[30px] mx-auto"
      />
      <p className="mt-[20px] mb-[20px]">hehe</p>
      <Outlet />
    </div>
  );
};

export default Homepage;
