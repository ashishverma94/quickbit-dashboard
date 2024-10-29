import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Profile from "../components/Profile/Profile";
import EditComp from "../components/EditComp/EditComp";

const EditPage = () => {
  return (
    <div className="bg-[#101010] w-full flex flex-row">
      <Sidebar />
      <div className="w-full flex flex-col gap-[24px]">
        <Navbar />
        <EditComp />
      </div>
    </div>
  );
};

export default EditPage;
