import React from "react";

export const Navber = () => {
  return (
    <div className="bg-black relative overflow-hidden">
      <div className="flex justify-center items-center gap-4 max-w-screen-lg mx-auto p-4">
        <p className="text-white text-sm font-normal leading-[21px] ">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <a
            href="Javascript:;"
            className="text-white text-sm font-semibold leading-6 underline ms-3"
          >
            ShopNow
          </a>
        </p>
        <div className="text-end">
          <select>
            <option value="">English</option>
            <option value="">Pakistan</option>
            <option value="">India</option>
          </select>
        </div>
      </div>
      <header>
        <div className="flex justify-between items-center">
          <h4>Exclusive</h4>
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
          <div>
            
          </div>
        </div>
      </header>
    </div>
  );
};
