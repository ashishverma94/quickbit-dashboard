import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";

const DetailsPage = () => {
  return (
    <div className="bg-[red] w-full h-[100vh] flex flex-row gap-[20px]">
      <div className="">
        <Sidebar />
      </div>
      <div className="bg-[green] w-[80%] flex flex-col gap-[20px]">
        <div className="bg-[yellow] h-[10vh] w-full">
          <Navbar />
        </div>
        <div className="bg-[yellow] h-[80vh] w-full"></div>
      </div>
    </div>
  );
};

export default DetailsPage;
