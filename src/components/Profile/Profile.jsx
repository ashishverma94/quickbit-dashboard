import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";


const Profile = ({
  breadcrumbdashboardtext = texts.breadcrumbdashboardtext,
  breadcrumbusermanagementtext = texts.breadcrumbusermanagementtext,
  breadcrumbusertext = texts.breadcrumbusertext,
  profileinfotitletext = texts.profileinfotitletext,
  fullnamelabel = texts.fullnamelabel,
  fullnamevalue = texts.fullnamevalue,
  emaillabel = texts.emaillabel,
  emailvalue = texts.emailvalue,
  ipaddresslabel = texts.ipaddresslabel,
  ipaddressvalue = texts.ipaddressvalue,
  statuslabel = texts.statuslabel,
  statustext = texts.statustext,
  logintypelabel = texts.logintypelabel,
  logintypevalue = texts.logintypevalue,
  discordidlabel = texts.discordidlabel,
  discordidvalue = texts.discordidvalue,
  signupdatelabel = texts.signupdatelabel,
  signupdatevalue = texts.signupdatevalue,
  lastloginlabel = texts.lastloginlabel,
  lastloginvalue = texts.lastloginvalue,
  resetpasswordbuttontext = texts.resetpasswordbuttontext,
  suspendbuttontext = texts.suspendbuttontext,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="w-full box-border min-h-[676px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[10px] p-[0px_16px_0px__16px]">
        {/* Container1 */}
        <section className=" w-full box-border min-h-[676px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-center items-center gap-[32px] p-[24px_0px_24px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="max-w-[1080px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px]">
            <div className="max-w-[79px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
              <div className="max-w-[79px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                  {breadcrumbdashboardtext}
                </span>
              </div>
            </div>

            <div className="w-[7px] h-[14px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden">
              <div className="nodeBg-64816646 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="max-w-[132px] w-full box-border min-h-[18px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
              <div className="max-w-[132px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                  {breadcrumbusermanagementtext}
                </span>
              </div>
            </div>

            <div className="w-[7px] h-[14px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden">
              <div className="nodeBg-64816649 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="max-w-[69px] w-full box-border min-h-[18px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
              <div className="max-w-[69px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                  {breadcrumbusertext}
                </span>
              </div>
            </div>
          </div>

          <div className="w-[550px] min-h-[578px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[40px_40px_40px__40px] rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px]">
            <div className="max-w-[470px] w-full box-border min-h-[23px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[0px_0px_0px__0px]">
              <div className="max-w-[105px] w-full box-border min-h-[23px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[20px] font-[Arial] font-[700] no-underline none leading-[20px] whitespace-nowrap text-[#ffffffff]">
                  {profileinfotitletext}
                </span>
              </div>

              <div className="w-[20px] h-[20px] opacity-[1] z-[1]  rotate-[0deg]">
                <div className="w-[12.33px] h-[12.33px] top-[1.75px] left-[5.92px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                  <div className="nodeBg-64816656 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>

                <div className="w-[14.83px] h-[14.83px] top-[3.42px] left-[1.75px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
                  <div className="nodeBg-64816657 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                </div>
              </div>
            </div>

            <div className="max-w-[470px] w-full box-border min-h-[379px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[0px_0px_0px__0px]">
              <div className="max-w-[470px] w-full box-border min-h-[379px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[16px_16px_16px__16px] rounded-tl-[8px] rounded-tr-[8px] rounded-br-[8px] rounded-bl-[8px] bg-[#ffffff0a]">
                <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
                  <div className="max-w-[64px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                      {fullnamelabel}
                    </span>
                  </div>

                  <div className="max-w-[64px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                      {fullnamevalue}
                    </span>
                  </div>
                </div>

                <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
                  <div className="max-w-[36px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                      {emaillabel}
                    </span>
                  </div>

                  <div className="max-w-[136px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                      {emailvalue}
                    </span>
                  </div>
                </div>

                <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
                  <div className="max-w-[68px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                      {ipaddresslabel}
                    </span>
                  </div>

                  <div className="max-w-[90px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                      {ipaddressvalue}
                    </span>
                  </div>
                </div>

                <div className="max-w-[438px] w-full box-border min-h-[25px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
                  <div className="max-w-[40px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                      {statuslabel}
                    </span>
                  </div>

                  <div className="max-w-[51px] w-full box-border min-h-[25px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-start gap-[10px] p-[2px_6px_2px__6px] rounded-tl-[4px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[4px] bg-[#4caf501a]">
                    <div className="max-w-[39px] w-full box-border min-h-[21px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                      <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[21px] whitespace-nowrap text-[#4caf50ff]">
                        {statustext}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
                  <div className="max-w-[69px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                      {logintypelabel}
                    </span>
                  </div>

                  <div className="max-w-[48px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                      {logintypevalue}
                    </span>
                  </div>
                </div>

                <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[5]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
                  <div className="max-w-[66px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                      {discordidlabel}
                    </span>
                  </div>

                  <div className="max-w-[86px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                      {discordidvalue}
                    </span>
                  </div>
                </div>

                <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[6]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
                  <div className="max-w-[78px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                      {signupdatelabel}
                    </span>
                  </div>

                  <div className="max-w-[109px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                      {signupdatevalue}
                    </span>
                  </div>
                </div>

                <div className="max-w-[438px] w-full box-border min-h-[22px] opacity-[1] z-[7]  rotate-[0deg]   flex flex-nowrap justify-between items-start content-space-between p-[0px_0px_0px__0px]">
                  <div className="max-w-[65px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffff99]">
                      {lastloginlabel}
                    </span>
                  </div>

                  <div className="max-w-[105px] w-full box-border min-h-[22px] opacity-[1] z-[1]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-nowrap text-[#ffffffff]">
                      {lastloginvalue}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[470px] w-full box-border min-h-[48px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-end items-center gap-[16px] p-[0px_0px_0px__0px]">
              <div className="max-w-[133px] w-full box-border min-h-[48px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[16px_0px_16px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ffffffff]">
                <div className="max-w-[109px] w-full box-border min-h-[16px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[14px] font-[Arial] font-[700] no-underline none leading-[14px] whitespace-nowrap text-[#000000ff]">
                    {resetpasswordbuttontext}
                  </span>
                </div>
              </div>

              <div className="max-w-[84px] w-full box-border min-h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[16px_0px_16px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ff1818ff]">
                <div className="max-w-[60px] w-full box-border min-h-[16px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[14px] font-[Arial] font-[700] no-underline none leading-[14px] whitespace-nowrap text-[#ffffffff]">
                    {suspendbuttontext}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Profile;
