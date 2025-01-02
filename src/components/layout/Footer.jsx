import React from "react";
import { FaCartShopping } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full pt-10 pb-20 md:px-20 px-10 bg-black text-gray-400 text-lg font-semibold">
      <div className="w-full flex flex-wrap gap-20 md:justify-center">
        <div className="flex flex-col gap-1">
          <p className="text-white flex text-2xl font-extrabold"><FaCartShopping size={35} />OnlyShop</p>
          <p>@ 2024 OnlyShop</p>
          <p>Technologies Pvt. Ltd.</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white font-bold cursor-pointer">Company</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Careers</p>
          <p className="cursor-pointer">Team</p>
          <p className="cursor-pointer">OnlyShop Instamart</p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2 ">
            <p className="text-white font-bold cursor-pointer">Contact Us</p>
            <p className="cursor-pointer">Help & Support</p>
            <p className="cursor-pointer">Partner with us</p>
            <p className="cursor-pointer">Ride with us</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-white font-bold cursor-pointer">Legal</p>
            <p className="cursor-pointer">Terms & Conditions</p>
            <p className="cursor-pointer">Cookie Policy</p>
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Investor Relations</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-white font-bold cursor-pointer">We deliver to:</p>
          <p className="cursor-pointer">Bangalore</p>
          <p className="cursor-pointer">Gurgaon</p>
          <p className="cursor-pointer">Hyderabad</p>
          <p className="cursor-pointer">Delhi</p>
          <p className="cursor-pointer">Mumbai</p>
          <p className="cursor-pointer">Pune</p>
          <div className="w-24 border-[1px] border-gray-400 rounded p-[1px] text-base">
            <p>589 cities</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;