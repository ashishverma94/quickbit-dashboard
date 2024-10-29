import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";


const Navbar = ({ userProfilePicture = images.userProfilePicture, searchInputPlaceholder = texts.searchInputPlaceholder }) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="max-w-[1160px] w-full min-h-[80px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[16px_16px_16px__16px] bg-[#000000ff] box-border border-l-[1px] border-l-[#f2f2f266] border-r-[0px] border-r-[#f2f2f266] border-t-[0px] border-t-[#f2f2f266] border-b-[0px] border-b-[#f2f2f266]">
        {/* Search1 */}
        <section className="w-[343px] h-[48px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ffffff1f]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden">
            <div className="w-[16.25px] h-[16.25px] top-[1.88px] left-[1.88px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511855 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="max-w-[45px] w-full box-border min-h-[16px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
            <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[14px] whitespace-nowrap text-[#ffffff99]">
              {searchInputPlaceholder}
            </span>
          </div>
        </section>
        {/* Nav icons1 */}
        <section className="max-w-[80px] w-full box-border min-h-[40px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[16px] p-[0px_0px_0px__0px]">
          <div className="w-[24px] h-[24px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[20.5px] h-[18.5px] top-[1.25px] left-[1.75px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511859 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[9.5px] h-[4.5px] top-[18.25px] left-[7.25px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511860 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="w-[40px] h-[40px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden rounded-full">
            <img
              src={`${userProfilePicture}`}
              className="absolute opacity-[1] bg-transparent bg-center bg-no-repeat w-full h-full object-cover bg-cover"
              alt="User profile picture"
            />{" "}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Navbar;
