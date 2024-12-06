import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";

export const Navber = () => {
  return (
    <div>
      <div className="bg-black relative overflow-hidden ">
        <div className="container flex justify-center items-center gap-5 h-[49px] w-full">
          <p className="text-white text-sm font-normal leading-[21px] text-center w-4/5	">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a
              href="Javascript:;"
              className="text-white text-sm font-semibold leading-6 underline ms-3"
            >
              ShopNow
            </a>
          </p>
          <select className="bg-transparent text-white ">
            <option value="" className="text-black">
              English
            </option>
            <option value="" className="text-black">
              Pakistan
            </option>
            <option value="" className="text-black">
              India
            </option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center container mx-auto h-[38px]  border-b mt-10">
        <h4 className="text-2xl font-bold	">Exclusive</h4>
        <ul className="flex justify-center items-center gap-12">
          <li className="text-base font-normal text-black">Home</li>
          <li className="text-base font-normal text-black">Contact</li>
          <li className="text-base font-normal text-black">About</li>
          <li className="text-base font-normal text-black">Sign Up</li>
        </ul>
        <div className="flex justify-center items-center gap-x-4">
          <div className="relative flex justify-center items-center">
            <input
              type="text"
              className="block w-full relative	 bg-[#F5F5F5] grow py-2.5 pl-5 pr-[70px] text-gray-900 placeholder:text-gray-400 text-[12px] focus:outline-0"
              placeholder="What are you looking for? "
              required
            />
            <BiSearch className="text-[20px] absolute right-4	" />
          </div>
          <FaRegHeart className="text-[20px]" />
          <FaCartShopping className="text-[20px] font-normal" />
        </div>
      </div>
    </div>
  );
};
