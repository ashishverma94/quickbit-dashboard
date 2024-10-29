import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";


const EditComp = ({
  navigationlinktext = texts.navigationlinktext,
  navigationlinktext1 = texts.navigationlinktext1,
  navigationlinktext2 = texts.navigationlinktext2,
  navigationlinktext3 = texts.navigationlinktext3,
  formtitletext = texts.formtitletext,
  inputlabeltext = texts.inputlabeltext,
  inputvaluetext = texts.inputvaluetext,
  inputlabeltext1 = texts.inputlabeltext1,
  inputvaluetext1 = texts.inputvaluetext1,
  inputlabeltext2 = texts.inputlabeltext2,
  inputvaluetext2 = texts.inputvaluetext2,
  inputlabeltext3 = texts.inputlabeltext3,
  inputvaluetext3 = texts.inputvaluetext3,
  inputlabeltext4 = texts.inputlabeltext4,
  inputvaluetext4 = texts.inputvaluetext4,
  buttontext = texts.buttontext,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="w-full box-border min-h-[811px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[10px] p-[0px_16px_0px__16px]">
        {/* Container1 */}
        <section className="w-full box-border min-h-[811px] opacity-[1] z-[0]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-center items-center gap-[32px] p-[24px_0px_24px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px]">
            <div className="max-w-[79px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
              <div className="max-w-[79px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                  {navigationlinktext}
                </span>
              </div>
            </div>

            <div className="w-[7px] h-[14px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden">
              <div className="nodeBg-6511560 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="max-w-[132px] w-full box-border min-h-[18px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
              <div className="max-w-[132px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                  {navigationlinktext1}
                </span>
              </div>
            </div>

            <div className="w-[7px] h-[14px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden">
              <div className="nodeBg-6511563 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="max-w-[69px] w-full box-border min-h-[18px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
              <div className="max-w-[69px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                  {navigationlinktext2}
                </span>
              </div>
            </div>

            <div className="w-[7px] h-[14px] opacity-[1] z-[5]  rotate-[0deg] overflow-hidden">
              <div className="nodeBg-6511566 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="max-w-[28px] w-full box-border min-h-[18px] opacity-[1] z-[6]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px]">
              <div className="max-w-[28px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                  {navigationlinktext3}
                </span>
              </div>
            </div>
          </div>

          <div className="w-[550px] min-h-[713px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-center items-center gap-[24px] p-[40px_0px_40px__0px] rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px]">
            <div className="max-w-[470px] w-full box-border min-h-[23px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[0px_0px_0px__0px]">
              <div className="max-w-[38px] w-full box-border min-h-[23px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                <span className="text-[20px] font-[Arial] font-[700] no-underline none leading-[20px] whitespace-nowrap text-[#ffffffff]">
                  {formtitletext}
                </span>
              </div>
            </div>

            <div className="max-w-[470px] w-full box-border min-h-[514px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[24px_24px_24px__24px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#101010ff]">
              <div className="max-w-[422px] w-full box-border h-[74px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[4px] p-[0px_0px_0px__0px]">
                <div className="max-w-[422px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-pre-wrap text-[#ffffffff]">
                    {inputlabeltext}
                  </span>
                </div>

                <input
                  className="max-w-[422px] w-full h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] box-border border-l-[1px] border-l-[#ffffff99] border-r-[1px] border-r-[#ffffff99] border-t-[1px] border-t-[#ffffff99] border-b-[1px] border-b-[#ffffff99]"
                  type="text"
                  placeholder="Type here"
                />

                <div className="max-w-[69px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                    {inputvaluetext}
                  </span>
                </div>
              </div>

              <div className="max-w-[422px] w-full box-border min-h-[74px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[16px] p-[0px_0px_0px__0px]">
                <div className="max-w-[422px] w-full box-border min-h-[74px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[4px] p-[0px_0px_0px__0px]">
                  <div className="max-w-[422px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-pre-wrap text-[#ffffffff]">
                      {inputlabeltext1}
                    </span>
                  </div>

                  <input
                    className="max-w-[422px] w-full h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] box-border border-l-[1px] border-l-[#ffffff99] border-r-[1px] border-r-[#ffffff99] border-t-[1px] border-t-[#ffffff99] border-b-[1px] border-b-[#ffffff99]"
                    type="text"
                    placeholder="Type here"
                  />

                  <div className="max-w-[71px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                      {inputvaluetext1}
                    </span>
                  </div>
                </div>
              </div>

              <div className="max-w-[422px] w-full box-border h-[74px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[4px] p-[0px_0px_0px__0px]">
                <div className="max-w-[422px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-pre-wrap text-[#ffffffff]">
                    {inputlabeltext2}
                  </span>
                </div>

                <input
                  className="max-w-[422px] w-full h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] box-border border-l-[1px] border-l-[#ffffff99] border-r-[1px] border-r-[#ffffff99] border-t-[1px] border-t-[#ffffff99] border-b-[1px] border-b-[#ffffff99]"
                  type="text"
                  placeholder="Type here"
                />

                <div className="max-w-[54px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                    {inputvaluetext2}
                  </span>
                </div>

                <div className="w-[24px] h-[24px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden">
                  <div className="w-[12px] h-[7px] top-[9px] left-[6px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                    <div className="nodeBg-6511587 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                  </div>
                </div>
              </div>

              <div className="max-w-[422px] w-full box-border h-[74px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[4px] p-[0px_0px_0px__0px]">
                <div className="max-w-[422px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-pre-wrap text-[#ffffffff]">
                    {inputlabeltext3}
                  </span>
                </div>

                <input
                  className="max-w-[422px] w-full h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] box-border border-l-[1px] border-l-[#ffffff99] border-r-[1px] border-r-[#ffffff99] border-t-[1px] border-t-[#ffffff99] border-b-[1px] border-b-[#ffffff99]"
                  type="email"
                  placeholder="Enter Email"
                />

                <div className="max-w-[151px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                    {inputvaluetext3}
                  </span>
                </div>
              </div>

              <div className="max-w-[422px] w-full box-border h-[74px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[4px] p-[0px_0px_0px__0px]">
                <div className="max-w-[422px] w-full box-border min-h-[22px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[14px] font-[Arial] font-[400] no-underline none leading-[22px] whitespace-pre-wrap text-[#ffffffff]">
                    {inputlabeltext4}
                  </span>
                </div>

                <div className="max-w-[422px] w-full h-[48px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[16px_10px_16px__10px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] box-border border-l-[1px] border-l-[#ffffff99] border-r-[1px] border-r-[#ffffff99] border-t-[1px] border-t-[#ffffff99] border-b-[1px] border-b-[#ffffff99]">
                  <div className="max-w-[44px] w-full box-border min-h-[18px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                    <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
                      {inputvaluetext4}
                    </span>
                  </div>

                  <div className="w-[24px] h-[24px] opacity-[1] z-[1]  rotate-[0deg]   overflow-hidden">
                    <div className="w-[12px] h-[7px] top-[9px] left-[6px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
                      <div className="nodeBg-6511597 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-[470px] w-full box-border min-h-[48px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-end items-center gap-[16px] p-[0px_0px_0px__0px]">
              <button
                className="cursor-pointer max-w-[120px] w-full box-border min-h-[48px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-center items-center gap-[10px] p-[16px_0px_16px__0px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ffffffff]"
                onClick={(e) => allFunctions["button"](e)}
              >
                <div className="max-w-[96px] w-full box-border min-h-[16px] opacity-[1] z-[0]  rotate-[0deg]   text-left leading-[0px]">
                  <span className="text-[14px] font-[Arial] font-[700] no-underline none leading-[14px] whitespace-nowrap text-[#000000ff]">
                    {buttontext}
                  </span>
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default EditComp;
