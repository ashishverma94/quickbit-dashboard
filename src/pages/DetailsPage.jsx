import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";

const DetailsPage = () => {
  return (
    <div className="bg-[#101010] w-full flex flex-row">
      <div className="">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col gap-[24px]">
        <Navbar />
        <Profile />
      </div>
    </div>
  );
};

export default DetailsPage;
