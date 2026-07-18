import DashboardHeader from "@/components/common/header/DashboardHeader";
import { IoIosNotifications } from "react-icons/io";
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Upgrade = () => {

  const router = useRouter()

  useEffect(() => {
    const item = localStorage.getItem("Token");
    console.log(item , "item");
    if(item == null){
      router.push('/login')
    } else{
      
    } 
  });


  return (
    <>
      <DashboardHeader />

      <div className="container mt-10">
        <p className="flex items-center f18 text_body">
          <IoIosNotifications size={25} />
          Please assess your{" "}
          <Link href="/dashboard/profile" className="!underline">
            {" "}
            Risk Profile{" "}
          </Link>{" "}
          and suitability before signing up. Do ensure you have understood the
          service before subscribing as fee is non-refundable.
        </p>

        <div className="fw_700 f18 mt-5">
          You may chose any of the following mode to transfer the fee:
        </div>
        <div className="mt-2">
          <p>
            1. Click on 'Pay Now' link to pay using Credit Card & get instant
            access.
          </p>
          <p>
            2. Use UPI ID or Bank Account details{" "}
            <Link href="#">shared below</Link> for direct transfer & send an
            email to <Link href="#">support@stalwartvalue.com</Link> with a)
            transaction details, and b) PAN details (name & number). Please note
            it may take one working day for activation of the account.
          </p>
        </div>
        <div className="row">
          {/* <div className="col-4 ">
            <div className=" text-white f32 fw_700 p-3 my-3"></div>
            <p className="p1 mb-0 fw_700">Descriptionnd stocks.</p>
            <p className=" p1 mb-0 fw_700 fw_700 bg-gray-200">Product type</p>
            <p className=" p1 mb-0 fw_700">Suitable</p>
            <p className=" p1 mb-0 fw_700 bg-gray-200">
              Numbers of stocks covered
            </p>
            <p className=" p1 mb-0 fw_700">Idea's covered</p>
            <p className=" p1 mb-0 fw_700 bg-gray-200">Research report</p>
            <p className=" p1 mb-0 fw_700">Stock-wise allocation</p>
            <p className=" p1 mb-0 fw_700 bg-gray-200">Buying range</p>
            <p className=" p1 mb-0 fw_700">Earning updates</p>
            <p className=" p1 mb-0 fw_700 bg-gray-200">Support</p>
            <p className=" p1 mb-0 fw_700">Exit calls</p>
            <p className=" p1 mb-0 fw_700 bg-gray-100">
              Access to Member only Live Webinars & recordings (Quaterly)
            </p>
            <p className=" p1 mb-0 fw_700">Add On benefit</p>
          </div> */}
          <div className="col-4 ">
            <div className="bg-[#1A2A5B] text-white f32 fw_700 p-3">
              Contra Strategy
            </div>
            <p className="p-1 mb-0">
              Capitalize on market inefficiencies by avoiding popular trends and
              focusing on undervalued stocks & turnaround stocks.
            </p>
            <p className=" p-1 mb-0 bg-gray-200">
              Research reports + Management Interaction Notes + Quarterly calls
            </p>
            <p className=" p-1 mb-0">Active Investors</p>
            <p className=" p-1 mb-0 bg-gray-200">8-10 stocks</p>
            <p className=" p-1 mb-0">
              Long term picks, High Risk/High Rewards picks
            </p>
            <p className=" p-1 mb-0 bg-gray-200">Yes</p>
            <p className=" p-1 mb-0">
              We provide this service under SEBI Research Analyst certification.
              As a part of regulations we can not provide stock wise allocation.
            </p>
            <p className=" p-1 mb-0 bg-gray-200">Yes</p>
            <p className=" p-1 mb-0">Yes</p>
            <p className=" p-1 mb-0 bg-gray-200">
              Through Whatsapp message & Email
            </p>
            <p className=" p-1 mb-0">Yes</p>
            <p className=" p-1 mb-0 bg-gray-100">Yes</p>
            <p className=" p-1 mb-0">-NA-</p>
            <div className="bg-red-100 p-3">
              <p className="f24 fw_700">₹ 22999 + GST</p>
              <p>₹ 30000</p>
            </div>
            <button
              type="submit"
              className="bg_red text-white py-3 mt-3 px-[32px] flex items-center rounded-[100px] arrow_card w-full justify-center"
            >
              <div className="f16 fw_600">Selected</div>
              <div className="arrow_img"></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Upgrade;
