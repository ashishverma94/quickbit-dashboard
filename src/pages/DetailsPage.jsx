import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const DetailsPage = () => {
  return (
    <div className="bg-[red] w-full h-[100vh] flex flex-row gap-[20px]">
      <div className="bg-[green] w-[20%]">
        <Sidebar/>
      </div>
      <div className="bg-[green] w-[80%] flex flex-col gap-[20px]">
        <div className="bg-[yellow] h-[10vh] w-full"></div>
        <div className="bg-[yellow] h-[80vh] w-full"></div>
      </div>
    </div>
  );
};

export default DetailsPage;
