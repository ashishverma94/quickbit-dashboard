import React, { useEffect, useRef } from "react";
import "./css/style.css";

import runAnimations, { allLinks, allFunctions } from "./scripts";
import texts from "./data/texts";
import images from "./data/images";


const Sidebar = ({
  dashboard = texts.dashboard,
  liveOrders = texts.liveOrders,
  completedOrders = texts.completedOrders,
  pendingRscQuotes = texts.pendingRscQuotes,
  shippingTracking = texts.shippingTracking,
  preQuotedCooks = texts.preQuotedCooks,
  inStoreFlips = texts.inStoreFlips,
  userManagement = texts.userManagement,
  analytics = texts.analytics,
  logout = texts.logout,
}) => {
  return (
    <div className="relative flex justify-center p-[0px] box-border">
      <div className="max-w-[280px] w-full box-border min-h-[824px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-col flex-nowrap justify-start items-start gap-[24px] p-[0px_16px_0px__16px] bg-[#000000ff]">
        {/* logo + Collapse1 */}
        <section className="max-w-[248px] w-full box-border min-h-[56px] opacity-[1] z-[0]  rotate-[0deg]   flex flex-nowrap justify-between items-center content-space-between p-[16px_0px_16px__0px] bg-[#000000ff]">
          <div className="w-[24px] h-[24px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[17.5px] h-[1.5px] top-[4.25px] left-[3.25px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511770 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[17.5px] h-[1.5px] top-[11.25px] left-[3.25px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511771 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[17.5px] h-[1.5px] top-[18.25px] left-[3.25px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511772 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>
        </section>
        {/* Navigations1 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[1]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[7.92px] h-[7.92px] top-[11.04px] left-[1.04px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511775 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[7.92px] h-[7.92px] top-[11.04px] left-[11.04px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511776 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[7.92px] h-[7.92px] top-[1.04px] left-[1.04px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511777 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[7.92px] h-[7.92px] top-[1.04px] left-[11.04px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511778 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="max-w-[79px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {dashboard}
            </span>
          </div>
        </section>
        {/* Navigations2 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[2]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[17.08px] h-[17.08px] top-[1.46px] left-[1.46px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511782 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[6.25px] h-[1.25px] top-[5.21px] left-[8.54px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511783 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[2.08px] h-[1.25px] top-[5.21px] left-[5.21px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511784 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[2.08px] h-[1.25px] top-[9.38px] left-[5.21px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511785 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[2.08px] h-[1.25px] top-[13.54px] left-[5.21px] opacity-[1] z-[4]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511786 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[6.25px] h-[1.25px] top-[9.38px] left-[8.54px] opacity-[1] z-[5]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511787 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[6.25px] h-[1.25px] top-[13.54px] left-[8.54px] opacity-[1] z-[6]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511788 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="max-w-[83px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {liveOrders}
            </span>
          </div>
        </section>
        {/* Navigations3 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[3]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[17.92px] h-[17.92px] top-[1.04px] left-[1.04px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511792 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[6.25px] h-[5.42px] top-[7.29px] left-[6.88px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511793 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="max-w-[131px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {completedOrders}
            </span>
          </div>
        </section>
        {/* Navigations4 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[4]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[14.58px] h-[17.92px] top-[1.04px] left-[2.71px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511797 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[3.75px] h-[1.25px] top-[8.54px] left-[6.04px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511798 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[6.25px] h-[1.25px] top-[5.21px] left-[6.04px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511799 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="max-w-[154px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {pendingRscQuotes}
            </span>
          </div>
        </section>
        {/* Navigations5 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[5]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[5.67px] h-[5.67px] top-[11.75px] left-[11.33px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511803 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[5.67px] h-[5.67px] top-[11.75px] left-[3px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511804 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[18.17px] h-[12.75px] top-[2.58px] left-[0.92px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511805 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="max-w-[143px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {shippingTracking}
            </span>
          </div>
        </section>
        {/* Navigations6 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[6]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[17.08px] h-[17.08px] top-[1.87px] left-[1.04px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511809 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[2.92px] h-[2.92px] top-[11.46px] left-[5.63px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511810 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[4.58px] h-[4.58px] top-[1.04px] left-[14.38px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511811 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="max-w-[133px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {preQuotedCooks}
            </span>
          </div>
        </section>
        {/* Navigations7 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[7]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[14.17px] h-[9.17px] top-[4.79px] left-[4.38px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511815 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[5.83px] h-[12.92px] top-[1.04px] left-[1.46px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511816 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[10.83px] h-[3.75px] top-[12.71px] left-[4.38px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511817 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[3.75px] h-[3.75px] top-[15.21px] left-[6.88px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511818 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[3.75px] h-[3.75px] top-[15.21px] left-[12.71px] opacity-[1] z-[4]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511819 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="max-w-[96px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {inStoreFlips}
            </span>
          </div>
        </section>
        {/* Navigations8 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[8]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#ffffff1f]">
          <div className="w-[24px] h-[24px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[7.5px] h-[7.5px] top-[4.25px] left-[8.25px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511823 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[4.5px] h-[7.24px] top-[3.25px] left-[15.25px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511824 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[13.5px] h-[7.5px] top-[13.25px] left-[5.25px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511825 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[5.79px] h-[7.5px] top-[12.25px] left-[16.96px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511826 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[4.5px] h-[7.24px] top-[3.25px] left-[4.25px] opacity-[1] z-[4]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511827 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[5.79px] h-[7.5px] top-[12.25px] left-[1.25px] opacity-[1] z-[5]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511828 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="max-w-[132px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffffff]">
              {userManagement}
            </span>
          </div>
        </section>
        {/* Navigations9 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[9]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[24px] h-[24px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[1.5px] h-[5.5px] top-[12.25px] left-[6.25px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511832 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[1.5px] h-[11.5px] top-[6.25px] left-[11.25px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511833 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[1.5px] h-[7.5px] top-[10.25px] left-[16.25px] opacity-[1] z-[2]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511834 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[20.5px] h-[20.5px] top-[1.75px] left-[1.75px] opacity-[1] z-[3]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511835 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="max-w-[65px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {analytics}
            </span>
          </div>
        </section>
        {/* Navigations10 */}
        <section className="max-w-[248px] w-full box-border h-[40px] opacity-[1] z-[10]  rotate-[0deg]   flex flex-nowrap justify-start items-center gap-[8px] p-[8px_8px_8px__8px] rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] rounded-bl-[10px] bg-[#000000ff]">
          <div className="w-[20px] h-[20px] opacity-[1] z-[0]  rotate-[0deg]">
            <div className="w-[16.5px] h-[15.25px] top-[3.83px] left-[1.75px] opacity-[1] z-[0]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511839 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>

            <div className="w-[1.5px] h-[8.17px] top-[0.92px] left-[9.25px] opacity-[1] z-[1]  rotate-[0deg] overflow-hidden box-border absolute">
              <div className="nodeBg-6511840 absolute  top-0 left-0 w-full h-full bg-transparent bg-center bg-contain bg-no-repeat "></div>
            </div>
          </div>

          <div className="max-w-[49px] w-full box-border min-h-[18px] opacity-[1] z-[1]  rotate-[0deg]   text-center leading-[0px]">
            <span className="text-[16px] font-[Arial] font-[400] no-underline none leading-[16px] whitespace-nowrap text-[#ffffff99]">
              {logout}
            </span>
          </div>
        </section>
      </div>
    </div>
  );
};
export default Sidebar;
