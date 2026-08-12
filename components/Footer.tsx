"use client";

import { menuItems } from "@/constants/menu";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-dark-green-shades-15 px-8 md:px-16 py-8 space-y-8">
      <div className="flex items-center justify-between">
        <img src="logo.png" alt="Logo" className="w-[130px]" />

        <ul className="hidden lg:flex items-center space-x-2 text-green-shades-97">
          {menuItems.map((menu, index) => {
            return (
              <li key={index}>
                <Link
                  href={menu.href}
                  className={`px-2 py-2 text-[14px] font-semibold`}
                >
                  {menu.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <p className="text-[16px] font-semibold text-absolute-white">
            Go To Top
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="rounded-full bg-dark-green-shades-20 p-3 text-absolute-white"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>

      <ul className="lg:hidden grid grid-cols-3 md:grid-cols-5 gap-3 items-center space-x-2 text-green-shades-97">
        {menuItems.map((menu, index) => {
          return (
            <li key={index}>
              <Link
                href={menu.href}
                className={`px-2 py-2 text-[14px] font-semibold`}
              >
                {menu.title}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="p-4 rounded-md bg-dark-green-shades-20 border border-dark-green-shades-25 flex flex-col lg:flex-row items-center justify-between gap-3">
        <div className="w-full lg:w-auto grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          <button className="p-2 border border-dark-green-shades-25 rounded-md flex items-center justify-center gap-1">
            <Mail size={24} className="text-green-shades-70" />
            <p className="text-[18px] font-medium text-absolute-white">hellor@squareup.com</p>
          </button>

          <button className="p-2 border border-dark-green-shades-25 rounded-md flex items-center justify-center gap-1">
            <Phone size={24} className="text-green-shades-70" />
            <p className="text-[18px] font-medium text-absolute-white">hellor@squareup.com</p>
          </button>

          <button className="p-2 border border-dark-green-shades-25 rounded-md flex items-center justify-center gap-1">
            <MapPin size={24} className="text-green-shades-70" />
            <p className="text-[18px] font-medium text-absolute-white">hellor@squareup.com</p>
          </button>
        </div>

        <p className="text-[18px] text-grey-shades-95">© 2023 Nutritionist. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
