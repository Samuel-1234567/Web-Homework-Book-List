import { Outlet } from "react-router";
import { use, useState } from "react";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-[30px] font-bold mb-4 mt-[20px]">About Me</h1>
      <h6>Random Info</h6>
      <Outlet />
    </div>
  );
};

export default AboutPage;
